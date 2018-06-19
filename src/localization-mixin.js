/*
    @polymerMixin
*/
export const LocalizationMixin = function(superClass) {
	return class extends superClass {

		_formatDate(date, locale) {
			return new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date(date));
		}
	};
};
