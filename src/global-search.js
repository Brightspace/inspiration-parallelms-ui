/*global elasticlunr*/
/*eslint no-undef: "error"*/
/*eslint no-invalid-this: "error"*/

import { EntityStore } from './redux-entity-store';

const _index = elasticlunr(/* @this */ function() {
	this.setRef('key');
	this.addField('type');
	this.addField('primaryText', { boost: 3, boolean: 'AND' });
	this.addField('secondaryText');
	this.addField('dates', {boost: 10, boolean: 'OR'});
});
const _dates = {};
const _viewed = {};
let _keys = [];

const _updatesSearchHandler = function(href, token, entity) {
	if (entity.class && entity.class.indexOf('feed-item') !== -1) {
		if (entity.class && entity.class.indexOf('news') !== -1) {
			var date = _formatDateResult(href, token, entity.properties.date, 'news');
			_addDate(date);
			return     _formatResult(
				href,
				token,
				entity.properties.title,
				entity.properties.body,
				'news',
				_formatDateWords(date)
			);
		}
		if (entity.class && entity.class.indexOf('grade') !== -1) {
			var gradeDate = _formatDateResult(href, token, entity.properties.date, 'grade');
			_addDate(gradeDate);
			return     _formatResult(
				href,
				token,
				entity.properties.title,
				entity.properties.comments,
				'grade',
				_formatDateWords(gradeDate)
			);
		}
	}

	return null;
};

const _contentSearchHandler = function(href, token, entity) {
	const type = 'content';
	if (entity.class && entity.class.indexOf('sequenced-activity') !== -1) {
		return     _formatResult(
			href,
			token,
			entity.properties.title,
			null,
			type
		);
	}
	if (entity.class && entity.class.indexOf('sequence-description') !== -1) {
		return     _formatResult(
			href,
			token,
			entity.properties.title,
			null,
			'module'
		);
	}
	return null;
};

const _activitySearchHandler = function(href, token, entity) {
	const type = 'activity';
	if (entity.class && entity.class.indexOf(type) !== -1) {
		var date = _getDateForEntity(href, token, entity, type);
		_addDate(date);
		return     _formatResult(
			href,
			token,
			type,
			null,
			type,
			_formatDateWords(date)
		);
	}
	return null;
};

const _courseOfferingSearchHandler = function(href, token, entity) {
	if (entity.class) {
		if (entity.class.indexOf('course-offering') !== -1) {
			return     _formatResult(
				href,
				token,
				entity.properties.name,
				entity.properties.code,
				'course-offering'
			);
		}
	}
	return null;
};
const _userSearchHandler = function(href, token, entity) {
	if (entity.class) {
		if (entity.class.indexOf('user') !== -1) {
			const displayName = entity.entities.filter(function(subEntity) {
				return subEntity.class && subEntity.class.indexOf('display') !== -1 && subEntity.class.indexOf('name') !== -1;
			});
			if (displayName.length !== 1) {
				return null;
			}
			return     _formatResult(
				href,
				token,
				displayName[0].properties.name,
				null,
				'user'
			);
		}
	}
	return null;
};
const _notesSearchHandler = function(href, token, entity) {
	if (entity.class) {
		if (entity.class.indexOf('note') !== -1) {
			const text = entity.properties.text;
			return _formatResult(
				href,
				token,
				text,
				null,
				'note'
			);
		}
	}
	return null;
};

const _discussionsSearchHandler = function(href, token, entity) {
	if (entity.class) {
		if (entity.class.indexOf('topic') !== -1) {
			return     _formatResult(
				href,
				token,
				entity.properties.name,
				entity.properties.description && entity.properties.description.Text || '',
				'topic'
			);
		}
		if (entity.class.indexOf('forum') !== -1) {
			return     _formatResult(
				href,
				token,
				entity.properties.name,
				entity.properties.description && entity.properties.description.Text || '',
				'forum'
			);

		}
		if (entity.class.indexOf('thread') !== -1) {
			const type = 'thread';
			const date = _getDateForEntity(href, token, entity, type);
			_addDate(date);
			return     _formatResult(
				href,
				token,
				entity.properties.subject,
				entity.properties.message,
				type,
				_formatDateWords(date)
			);
		}
		if (entity.class.indexOf('post') !== -1) {
			const type = 'post';
			const date = _getDateForEntity(href, token, entity, type);
			_addDate(date);
			return     _formatResult(
				href,
				token,
				entity.properties.subject,
				entity.properties.message,
				type,
				_formatDateWords(date)
			);
		}
	}
	return null;
};
const SPLITTER = '|';
const _formatDateWords = function(date) {
	//TODO(eknutson): format other words like, Today, Tomorrow, September 20 etc
	const key = _formatDate(date.date),
		today  = _formatDate(new Date()),
		tomorrow = _formatDate(new Date().setDate(new Date().getDate() + 1)),
		yesterday = _formatDate(new Date().setDate(new Date().getDate() - 1));
	if (key === today) {
		return `today ${ key }`;
	}
	if (key === tomorrow) {
		return `tomorrow ${ key }`;
	}
	if (key === yesterday) {
		return `yesterday ${ key }`;
	}
};

const _addDate = function(result) {
	if (result && _viewed[result.href] !== result.token) {
		const key = _formatDate(result.date);
		const current =  _dates[key] || [];
		current.push(result);
		current.sort(function(a, b) {
			return a.date > b.date;
		});

		_dates[key] = current;
		_keys = Object
			.keys(_dates)
			.sort(function(a, b) {
				return a > b;
			});
		_viewed[result.href] = result.token;
	}
};

const _formatResult = function(href, token, primaryText, secondaryText, type, dates) {
	return     {
		type: type,
		primaryText: primaryText,
		secondaryText: secondaryText,
		dates: dates,
		key: `${token}${SPLITTER}${href}${SPLITTER}${type}`
	};
};

const _getDateForEntity = function(href, token, entity, type) {
	for (const sub of entity.entities) {
		if (sub.class.indexOf('date') !== -1) {
			return     _formatDateResult(
				href,
				token,
				sub.properties.date,
				type
			);
		}
	}
	return null;
};

const _formatDateResult = function(href, token, date, type) {
	return     {
		type: type,
		date: date,
		href: href,
		token: token
	};
};

const _formatDate = function(date) {
	const d = new Date(date);
	return `${ d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};

const _handlers = [
	_contentSearchHandler,
	_updatesSearchHandler,
	_activitySearchHandler,
	_userSearchHandler,
	_courseOfferingSearchHandler,
	_discussionsSearchHandler,
	_notesSearchHandler,
];

export const GlobalSearch = {
	update: (href, token, entity) => {
		/*
        _debouncer = Polymer.Debouncer.debounce(
            _debouncer,
            Polymer.Async.timeOut.after(500),
            function() {
        */

		if (!entity) {
			return;
		}
		for (const handler of _handlers) {
			const result = handler(href, token, entity);
			if (result) {
				_index.addDoc(result);
				break;
			}
		}
		_viewed[href] = token;
	},
	dates: (start, end) => {
		const s = new Date(_formatDate(start));
		const e = new Date(_formatDate(end));
		const results = _keys
			.filter(function(key) {
				const keyDate = new Date(key);
				return keyDate >= s && keyDate <= e;
			})
			.map(function(key) {
				return _dates[key];
			});
		// flatten arrays
		return [].concat.apply([], results);
	},
	search: (term) => {
		return _index
			.search(term)
			.map(function(result) {
				const parts = result.ref.split(SPLITTER);
				return {
					token: parts[0],
					href: parts[1],
					type: parts[2]
				};
			});
	}
};

let lastUpdated = 0;
EntityStore.subscribe(() => {
	const state = EntityStore.getState();
	Object.keys(state.entitiesByHref).forEach(href => {
		Object.keys(state.entitiesByHref[href]).forEach(token => {
			const entity = state.entitiesByHref[href][token];
			if (!entity.isFetching && entity.lastUpdated && entity.lastUpdated >= lastUpdated) {
				GlobalSearch.update(href, token, entity.entity);
			}
		});
	});
	lastUpdated = Date.now();
});
