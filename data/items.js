window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.api.proddev.d2l', {
	"class": [
		"root"
	],
	"links": [
		{
			"rel": [
				"https://api.brightspace.com/rels/enrollments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/whoami"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.api.proddev.d2l"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organizations"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l', {
	"class": [
		"enrollments",
		"root"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-enrollments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-pinned-enrollments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175?search=&pageSize=20&embedDepth=0&sort=&orgUnitTypeId=3&bookmark=&autoPinCourses=0&pinned=1"
		}
	],
	"actions": [
		{
			"name": "search-my-enrollments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": ""
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 3
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175', {
	"class": [
		"user"
	],
	"entities": [
		{
			"class": [
				"display",
				"name"
			],
			"properties": {
				"name": "Fname user"
			},
			"rel": [
				"https://api.brightspace.com/rels/display-name"
			]
		},
		{
			"class": [
				"first",
				"name"
			],
			"properties": {
				"name": "Fname"
			},
			"rel": [
				"https://api.brightspace.com/rels/first-name"
			]
		},
		{
			"class": [
				"profile"
			],
			"entities": [
				{
					"class": [
						"file",
						"image",
						"default-image"
					],
					"properties": {
						"smallRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504",
						"regularRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile200.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#small"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#regular"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
						}
					],
					"rel": [
						"https://api.brightspace.com/rels/profile-image"
					]
				}
			],
			"rel": [
				"https://api.brightspace.com/rels/user-profile"
			]
		}
	],
	"links": [
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/my-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-11T18%3a48%3a44.324Z&end=2017-09-18T18%3a48%3a44.324Z"
		},
		{
			"rel": [
				"https://discussions.api.brightspace.com/rels/my-subscriptions"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/subscriptions/threads/users/175"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/root"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/api/hm"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-enrollments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175"
		},
		{
			"rel": [
				"https://parentportal.api.brightspace.com/rels/parent"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/12"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606', {
	"class": [
		"active",
		"organization"
	],
	"properties": {
		"name": "Dev",
		"code": null,
		"startDate": null,
		"endDate": null,
		"isActive": true
	},
	"entities": [
		{
			"class": [
				"color"
			],
			"properties": {
				"description": "random",
				"hexString": "#0099B3"
			},
			"rel": [
				"https://api.brightspace.com/rels/color"
			]
		},
		{
			"class": [
				"relative-uri"
			],
			"properties": {
				"path": "/d2l/home"
			},
			"rel": [
				"item",
				"https://api.brightspace.com/rels/organization-homepage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/my-organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606/users/175?start=2017-09-11T18%3a48%3a44.416Z&end=2017-09-18T18%3a48%3a44.416Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/discussions"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606"
		},
		{
			"rel": [
				"https://assignments.api.brightspace.com/rels/assignments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-organization-grades"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.grades.api.proddev.d2l/organizations/6606/users/175"
		},
		{
			"rel": [
				"https://notifications.api.brightspace.com/rels/organization-notifications"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6606"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization-homepage"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/home",
			"type": "text/html"
		},
		{
			"rel": [
				"https://themes.api.brightspace.com/rels/theme"
			],
			"class": [
				"active",
				"theme"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6606/3"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0', {
	"class": [
		"enrollments",
		"collection"
	],
	"entities": [
		{
			"class": [
				"enrollment",
				"unpinned"
			],
			"rel": [
				"https://api.brightspace.com/rels/user-enrollment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/t7KpAAhFJY-2i_4SvEU3b3MKZ6DmCqFefzZspZgzRj0/enrollment"
		},
		{
			"class": [
				"enrollment",
				"unpinned"
			],
			"rel": [
				"https://api.brightspace.com/rels/user-enrollment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/pDbLBMUyLfIWcub9m4HQDX5kNWZmLOi-jsJwilLMKe4/enrollment"
		},
		{
			"class": [
				"enrollment",
				"unpinned"
			],
			"rel": [
				"https://api.brightspace.com/rels/user-enrollment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/sgvwn6ZboBwoMZqCrqhlawvOe1uiFj47iD9NUhBq38g/enrollment"
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/departments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/departments"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/semesters"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/semesters"
		}
	],
	"actions": [
		{
			"name": "add-department-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 203
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		},
		{
			"name": "search-my-departments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/departments",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "add-semester-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 5
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		},
		{
			"name": "search-my-semesters",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/semesters",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "search-my-enrollments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 3
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0&pinned=1', {
	"class": [
		"enrollments",
		"collection"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0&pinned=1"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/departments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/departments"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/semesters"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/semesters"
		}
	],
	"actions": [
		{
			"name": "add-department-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 203
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				},
				{
					"name": "pinned",
					"type": "checkbox",
					"value": true
				}
			]
		},
		{
			"name": "search-my-departments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/departments",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "add-semester-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 5
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				},
				{
					"name": "pinned",
					"type": "checkbox",
					"value": true
				}
			]
		},
		{
			"name": "search-my-semesters",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/semesters",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "search-my-enrollments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 3
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				},
				{
					"name": "pinned",
					"type": "checkbox",
					"value": true
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-11T18%3a48%3a44.324Z&end=2017-09-18T18%3a48%3a44.324Z', {
	"properties": {
		"start": "2017-09-11T18:48:44.324Z",
		"end": "2017-09-18T18:48:44.324Z"
	},
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-15T19:35:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/175"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/user-activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-11T18%3a48%3a44.324Z&end=2017-09-18T18%3a48%3a44.324Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-18T18%3a48%3a44.324Z&end=2017-09-25T18%3a48%3a44.324Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-04T18%3a48%3a44.324Z&end=2017-09-11T18%3a48%3a44.324Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/overdue"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175/overdue"
		}
	],
	"actions": [
		{
			"name": "select-custom-date-range",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "start",
					"type": "text",
					"value": "2017-09-11T18:48:44.324Z"
				},
				{
					"name": "end",
					"type": "text",
					"value": "2017-09-18T18:48:44.324Z"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/subscriptions/threads/users/175?pageSize=20&pageNumber=1&internalIndex=0', {
	"class": [
		"threads",
		"collection",
		"paged",
		"subscribed"
	],
	"properties": {
		"maxNumThreads": 0,
		"note": "The number of actual pages to be iterated may be less than what's reported in paged info!",
		"pagingInfo": {
			"pageSize": 20,
			"currentPage": 1,
			"totalPages": 1
		}
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/subscriptions/threads/users/175?pageSize=20&pageNumber=1&internalIndex=0"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/12', {
	"class": [
		"user"
	],
	"entities": [
		{
			"class": [
				"display",
				"name"
			],
			"properties": {
				"name": "Momma Cass"
			},
			"rel": [
				"https://api.brightspace.com/rels/display-name"
			]
		},
		{
			"class": [
				"first",
				"name"
			],
			"properties": {
				"name": "Momma"
			},
			"rel": [
				"https://api.brightspace.com/rels/first-name"
			]
		}
	],
	"links": [
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/my-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/12?start=2017-09-11T18%3a48%3a44.864Z&end=2017-09-18T18%3a48%3a44.864Z"
		},
		{
			"rel": [
				"https://discussions.api.brightspace.com/rels/my-subscriptions"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/subscriptions/threads/users/12"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/12"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/root"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/api/hm"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-enrollments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12"
		},
		{
			"rel": [
				"https://parentportal.api.brightspace.com/rels/child"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"https://parentportal.api.brightspace.com/rels/child"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606', {
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606/users/175?start=2017-09-11T18%3a48%3a44.416Z&end=2017-09-18T18%3a48%3a44.416Z', {
	"properties": {
		"start": "2017-09-11T18:48:44.416Z",
		"end": "2017-09-18T18:48:44.416Z"
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606/users/175?start=2017-09-11T18%3a48%3a44.416Z&end=2017-09-18T18%3a48%3a44.416Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606/users/175?start=2017-09-18T18%3a48%3a44.416Z&end=2017-09-25T18%3a48%3a44.416Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6606/users/175?start=2017-09-04T18%3a48%3a44.416Z&end=2017-09-11T18%3a48%3a44.416Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606', {
	"class": [
		"forums",
		"collection"
	],
	"entities": [
		{
			"class": [
				"forum"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"properties": {
				"name": "Forum01",
				"description": {
					"Text": "",
					"Html": ""
				}
			},
			"entities": [
				{
					"class": [
						"topic",
						"text"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Forum01",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "TopicA",
						"description": "<p>TESTing</p>"
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
				},
				{
					"rel": [
						"organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
				}
			]
		},
		{
			"class": [
				"forum",
				"allowAnonymous"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"properties": {
				"name": "Forum02",
				"description": {
					"Text": "",
					"Html": "<p>TESTING 02</p>"
				}
			},
			"entities": [
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "TopicB",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						},
						{
							"name": "create-anonymous-thread",
							"title": "Create Anonymous Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								},
								{
									"name": "isAnonymous",
									"type": "checkbox"
								}
							]
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3"
				},
				{
					"rel": [
						"organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
				}
			]
		},
		{
			"class": [
				"forum",
				"moderated"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"properties": {
				"name": "Forum03",
				"description": {
					"Text": "",
					"Html": ""
				}
			},
			"entities": [
				{
					"class": [
						"topic",
						"locked",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "TopicC",
						"description": "<p>desc=topicC</p>"
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4/topics/6"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4/topics/6/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4"
				},
				{
					"rel": [
						"organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6606', {
	"class": [
		"assignments",
		"home"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.grades.api.proddev.d2l/users/175', {
	"class": [
		"user-grades",
		"collection"
	],
	"properties": {
		"total": 0
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.grades.api.proddev.d2l/users/175"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6606', {
	"properties": {
		"UnapprovedDiscussions": 0,
		"UnattemptedQuizzes": 0,
		"UngradedQuizzes": 0,
		"UnreadAssignmentFeedback": 0,
		"UnreadAssignmentSubmissions": 0,
		"UnreadDiscussions": 2
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6606/3', {
	"class": [
		"theme"
	],
	"properties": {
		"BackgroundColor": "#007795"
	},
	"entities": [
		{
			"class": [
				"image",
				"file"
			],
			"properties": {
				"alt": "My Home",
				"imageRelativePath": "/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504",
				"homeRelativePath": "/d2l/lp/ouHome/defaultHome.d2l"
			},
			"links": [
				{
					"rel": [
						"alternate"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504"
				},
				{
					"rel": [
						"https://themes.api.brightspace.com/rels/home"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/lp/ouHome/defaultHome.d2l"
				}
			],
			"rel": [
				"https://themes.api.brightspace.com/rels/logo"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6606/3"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/t7KpAAhFJY-2i_4SvEU3b3MKZ6DmCqFefzZspZgzRj0/enrollment', {
	"class": [
		"enrollment",
		"unpinned"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/t7KpAAhFJY-2i_4SvEU3b3MKZ6DmCqFefzZspZgzRj0/enrollment"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/role"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.roles.api.proddev.d2l/578"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/t7KpAAhFJY-2i_4SvEU3b3MKZ6DmCqFefzZspZgzRj0"
		}
	],
	"actions": [
		{
			"name": "pin-course",
			"method": "PUT",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/organizations/6609",
			"fields": [
				{
					"name": "pinned",
					"type": "hidden",
					"value": true
				}
			]
		}
	],
	"rel": [
		"https://api.brightspace.com/rels/user-enrollment"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/pDbLBMUyLfIWcub9m4HQDX5kNWZmLOi-jsJwilLMKe4/enrollment', {
	"class": [
		"enrollment",
		"unpinned"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/pDbLBMUyLfIWcub9m4HQDX5kNWZmLOi-jsJwilLMKe4/enrollment"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/role"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.roles.api.proddev.d2l/578"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/pDbLBMUyLfIWcub9m4HQDX5kNWZmLOi-jsJwilLMKe4"
		}
	],
	"actions": [
		{
			"name": "pin-course",
			"method": "PUT",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/organizations/6613",
			"fields": [
				{
					"name": "pinned",
					"type": "hidden",
					"value": true
				}
			]
		}
	],
	"rel": [
		"https://api.brightspace.com/rels/user-enrollment"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/sgvwn6ZboBwoMZqCrqhlawvOe1uiFj47iD9NUhBq38g/enrollment', {
	"class": [
		"enrollment",
		"unpinned"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/sgvwn6ZboBwoMZqCrqhlawvOe1uiFj47iD9NUhBq38g/enrollment"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/role"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.roles.api.proddev.d2l/578"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/sgvwn6ZboBwoMZqCrqhlawvOe1uiFj47iD9NUhBq38g"
		}
	],
	"actions": [
		{
			"name": "pin-course",
			"method": "PUT",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/175/organizations/6614",
			"fields": [
				{
					"name": "pinned",
					"type": "hidden",
					"value": true
				}
			]
		}
	],
	"rel": [
		"https://api.brightspace.com/rels/user-enrollment"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/175', {
	"class": [
		"activity",
		"user-assignment-activity"
	],
	"entities": [
		{
			"class": [
				"date",
				"due-date"
			],
			"properties": {
				"date": "2017-09-15T19:35:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		},
		{
			"class": [
				"completion",
				"incomplete"
			],
			"rel": [
				"item"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/175"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/assignment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175/overdue', {
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-01T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"date",
						"end-date"
					],
					"properties": {
						"date": "2017-09-09T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609/users/175"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
				}
			],
			"rel": [
				"https://api.brightspace.com/rels/user-activity-usage",
				"activities"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175/overdue"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-11T18%3a48%3a45.814Z&end=2017-09-18T18%3a48%3a45.814Z"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/12?start=2017-09-11T18%3a48%3a44.864Z&end=2017-09-18T18%3a48%3a44.864Z', {
	"properties": {
		"start": "2017-09-11T18:48:44.864Z",
		"end": "2017-09-18T18:48:44.864Z"
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/12?start=2017-09-11T18%3a48%3a44.864Z&end=2017-09-18T18%3a48%3a44.864Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/12?start=2017-09-18T18%3a48%3a44.864Z&end=2017-09-25T18%3a48%3a44.864Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/12?start=2017-09-04T18%3a48%3a44.864Z&end=2017-09-11T18%3a48%3a44.864Z"
		}
	],
	"actions": [
		{
			"name": "select-custom-date-range",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/12",
			"fields": [
				{
					"name": "start",
					"type": "text",
					"value": "2017-09-11T18:48:44.864Z"
				},
				{
					"name": "end",
					"type": "text",
					"value": "2017-09-18T18:48:44.864Z"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0', {
	"class": [
		"enrollments",
		"collection"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/departments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12/departments"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/semesters"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12/semesters"
		}
	],
	"actions": [
		{
			"name": "add-department-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 203
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		},
		{
			"name": "search-my-departments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12/departments",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "add-semester-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 5
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		},
		{
			"name": "search-my-semesters",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12/semesters",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "search-my-enrollments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/12",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 3
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178', {
	"class": [
		"user"
	],
	"entities": [
		{
			"class": [
				"display",
				"name"
			],
			"properties": {
				"name": "Fname user2"
			},
			"rel": [
				"https://api.brightspace.com/rels/display-name"
			]
		},
		{
			"class": [
				"first",
				"name"
			],
			"properties": {
				"name": "Fname"
			},
			"rel": [
				"https://api.brightspace.com/rels/first-name"
			]
		}
	],
	"links": [
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/my-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-11T18%3a48%3a46.111Z&end=2017-09-18T18%3a48%3a46.111Z"
		},
		{
			"rel": [
				"https://discussions.api.brightspace.com/rels/my-subscriptions"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/subscriptions/threads/users/178"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/root"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/api/hm"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-enrollments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2', {
	"class": [
		"forum"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/forum"
	],
	"properties": {
		"name": "Forum01",
		"description": {
			"Text": "",
			"Html": ""
		}
	},
	"entities": [
		{
			"class": [
				"topic",
				"text"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Forum01",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "TopicA",
				"description": "<p>TESTing</p>"
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
		},
		{
			"rel": [
				"organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3', {
	"class": [
		"forum",
		"allowAnonymous"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/forum"
	],
	"properties": {
		"name": "Forum02",
		"description": {
			"Text": "",
			"Html": "<p>TESTING 02</p>"
		}
	},
	"entities": [
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "TopicB",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				},
				{
					"name": "create-anonymous-thread",
					"title": "Create Anonymous Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						},
						{
							"name": "isAnonymous",
							"type": "checkbox"
						}
					]
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3"
		},
		{
			"rel": [
				"organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4', {
	"class": [
		"forum",
		"moderated"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/forum"
	],
	"properties": {
		"name": "Forum03",
		"description": {
			"Text": "",
			"Html": ""
		}
	},
	"entities": [
		{
			"class": [
				"topic",
				"locked",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "TopicC",
				"description": "<p>desc=topicC</p>"
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4/topics/6"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4/topics/6/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4"
		},
		{
			"rel": [
				"organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609', {
	"class": [
		"active",
		"course-offering"
	],
	"properties": {
		"name": "Course",
		"code": "C1",
		"startDate": null,
		"endDate": null,
		"isActive": true
	},
	"entities": [
		{
			"class": [
				"color"
			],
			"properties": {
				"description": "vibrant",
				"hexString": "#CC9547"
			},
			"rel": [
				"https://api.brightspace.com/rels/color"
			]
		},
		{
			"class": [
				"relative-uri"
			],
			"properties": {
				"path": "/d2l/home/6609"
			},
			"rel": [
				"item",
				"https://api.brightspace.com/rels/organization-homepage"
			]
		},
		{
			"class": [
				"course-image"
			],
			"rel": [
				"https://api.brightspace.com/rels/organization-image"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609/image?version=%2fimages%2fa2de9109-8362-4913-8fb9-3607ea9c484d"
		}
	],
	"links": [
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/my-organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-11T18%3a48%3a46.483Z&end=2017-09-18T18%3a48%3a46.483Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/sequence"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/discussions"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://assignments.api.brightspace.com/rels/assignments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-organization-grades"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.grades.api.proddev.d2l/organizations/6609/users/175"
		},
		{
			"rel": [
				"https://notifications.api.brightspace.com/rels/organization-notifications"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6609"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization-homepage"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/home/6609",
			"type": "text/html"
		},
		{
			"rel": [
				"https://themes.api.brightspace.com/rels/theme"
			],
			"class": [
				"active",
				"theme"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6609/3"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/t7KpAAhFJY-2i_4SvEU3b3MKZ6DmCqFefzZspZgzRj0', {
	"class": [
		"user",
		"enrolled"
	],
	"entities": [
		{
			"class": [
				"display",
				"name"
			],
			"properties": {
				"name": "Fname user"
			},
			"rel": [
				"https://api.brightspace.com/rels/display-name"
			]
		},
		{
			"class": [
				"first",
				"name"
			],
			"properties": {
				"name": "Fname"
			},
			"rel": [
				"https://api.brightspace.com/rels/first-name"
			]
		},
		{
			"class": [
				"profile"
			],
			"entities": [
				{
					"class": [
						"file",
						"image",
						"default-image"
					],
					"properties": {
						"smallRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504",
						"regularRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile200.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#small"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#regular"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
						}
					],
					"rel": [
						"https://api.brightspace.com/rels/profile-image"
					]
				}
			],
			"rel": [
				"https://api.brightspace.com/rels/user-profile"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/t7KpAAhFJY-2i_4SvEU3b3MKZ6DmCqFefzZspZgzRj0"
		},
		{
			"rel": [
				"https://users.api.brightspace.com/rels/canonical-user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"https://parentportal.api.brightspace.com/rels/parent"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/12"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613', {
	"class": [
		"active",
		"course-offering"
	],
	"properties": {
		"name": "Course2",
		"code": "C2",
		"startDate": null,
		"endDate": null,
		"isActive": true
	},
	"entities": [
		{
			"class": [
				"color"
			],
			"properties": {
				"description": "vibrant",
				"hexString": "#CC9547"
			},
			"rel": [
				"https://api.brightspace.com/rels/color"
			]
		},
		{
			"class": [
				"relative-uri"
			],
			"properties": {
				"path": "/d2l/home/6613"
			},
			"rel": [
				"item",
				"https://api.brightspace.com/rels/organization-homepage"
			]
		},
		{
			"class": [
				"course-image"
			],
			"rel": [
				"https://api.brightspace.com/rels/organization-image"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613/image?version=%2fimages%2f807f3773-1197-4c18-8974-77e4d70e1960"
		}
	],
	"links": [
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/my-organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613/users/175?start=2017-09-11T18%3a48%3a46.769Z&end=2017-09-18T18%3a48%3a46.769Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/sequence"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6613"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/discussions"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6613"
		},
		{
			"rel": [
				"https://assignments.api.brightspace.com/rels/assignments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6613"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-organization-grades"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.grades.api.proddev.d2l/organizations/6613/users/175"
		},
		{
			"rel": [
				"https://notifications.api.brightspace.com/rels/organization-notifications"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6613"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization-homepage"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/home/6613",
			"type": "text/html"
		},
		{
			"rel": [
				"https://themes.api.brightspace.com/rels/theme"
			],
			"class": [
				"active",
				"theme"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6613/3"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/pDbLBMUyLfIWcub9m4HQDX5kNWZmLOi-jsJwilLMKe4', {
	"class": [
		"user",
		"enrolled"
	],
	"entities": [
		{
			"class": [
				"display",
				"name"
			],
			"properties": {
				"name": "Fname user"
			},
			"rel": [
				"https://api.brightspace.com/rels/display-name"
			]
		},
		{
			"class": [
				"first",
				"name"
			],
			"properties": {
				"name": "Fname"
			},
			"rel": [
				"https://api.brightspace.com/rels/first-name"
			]
		},
		{
			"class": [
				"profile"
			],
			"entities": [
				{
					"class": [
						"file",
						"image",
						"default-image"
					],
					"properties": {
						"smallRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504",
						"regularRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile200.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#small"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#regular"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
						}
					],
					"rel": [
						"https://api.brightspace.com/rels/profile-image"
					]
				}
			],
			"rel": [
				"https://api.brightspace.com/rels/user-profile"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/pDbLBMUyLfIWcub9m4HQDX5kNWZmLOi-jsJwilLMKe4"
		},
		{
			"rel": [
				"https://users.api.brightspace.com/rels/canonical-user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"https://parentportal.api.brightspace.com/rels/parent"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/12"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614', {
	"class": [
		"active",
		"course-offering"
	],
	"properties": {
		"name": "Course3",
		"code": "C3",
		"startDate": null,
		"endDate": null,
		"isActive": true
	},
	"entities": [
		{
			"class": [
				"color"
			],
			"properties": {
				"description": "vibrant",
				"hexString": "#4C3F99"
			},
			"rel": [
				"https://api.brightspace.com/rels/color"
			]
		},
		{
			"class": [
				"relative-uri"
			],
			"properties": {
				"path": "/d2l/home/6614"
			},
			"rel": [
				"item",
				"https://api.brightspace.com/rels/organization-homepage"
			]
		},
		{
			"class": [
				"course-image"
			],
			"rel": [
				"https://api.brightspace.com/rels/organization-image"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614/image?version=%2fimages%2f09679190-7833-448b-8183-1b1ca0f60969"
		}
	],
	"links": [
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/my-organization-activities"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614/users/175?start=2017-09-11T18%3a48%3a46.976Z&end=2017-09-18T18%3a48%3a46.976Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/sequence"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6614"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/discussions"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6614"
		},
		{
			"rel": [
				"https://assignments.api.brightspace.com/rels/assignments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6614"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/my-organization-grades"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.grades.api.proddev.d2l/organizations/6614/users/175"
		},
		{
			"rel": [
				"https://notifications.api.brightspace.com/rels/organization-notifications"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6614"
		},
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization-homepage"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/home/6614",
			"type": "text/html"
		},
		{
			"rel": [
				"https://themes.api.brightspace.com/rels/theme"
			],
			"class": [
				"active",
				"theme"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6614/3"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/sgvwn6ZboBwoMZqCrqhlawvOe1uiFj47iD9NUhBq38g', {
	"class": [
		"user",
		"enrolled"
	],
	"entities": [
		{
			"class": [
				"display",
				"name"
			],
			"properties": {
				"name": "Fname user"
			},
			"rel": [
				"https://api.brightspace.com/rels/display-name"
			]
		},
		{
			"class": [
				"first",
				"name"
			],
			"properties": {
				"name": "Fname"
			},
			"rel": [
				"https://api.brightspace.com/rels/first-name"
			]
		},
		{
			"class": [
				"profile"
			],
			"entities": [
				{
					"class": [
						"file",
						"image",
						"default-image"
					],
					"properties": {
						"smallRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504",
						"regularRelativePath": "/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile200.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#small"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile22.png?v=10.7.6.0-0809504"
						},
						{
							"rel": [
								"preview",
								"https://api.brightspace.com/rels/thumbnail#regular"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/img/0/Framework.UserProfileBadge.actProfile50.png?v=10.7.6.0-0809504"
						}
					],
					"rel": [
						"https://api.brightspace.com/rels/profile-image"
					]
				}
			],
			"rel": [
				"https://api.brightspace.com/rels/user-profile"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/enrolled-user/sgvwn6ZboBwoMZqCrqhlawvOe1uiFj47iD9NUhBq38g"
		},
		{
			"rel": [
				"https://users.api.brightspace.com/rels/canonical-user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"https://parentportal.api.brightspace.com/rels/parent"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/12"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609', {
	"class": [
		"activity",
		"assignment-activity",
		"published"
	],
	"entities": [
		{
			"class": [
				"date",
				"due-date"
			],
			"properties": {
				"date": "2017-09-15T19:35:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/assignment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
		}
	],
	"actions": [
		{
			"name": "set-draft",
			"method": "POST",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2/setDraft/1"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2', {
	"class": [
		"assignment"
	],
	"properties": {
		"name": "Assignment 2",
		"dueDate": "2017-09-15T19:35:00.000Z",
		"draft": false
	},
	"entities": [
		{
			"class": [
				"attachments"
			],
			"rel": [
				"https://assignments.api.brightspace.com/rels/attachments"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
		},
		{
			"rel": [
				"service"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
		},
		{
			"rel": [
				"alternate"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=6609&db=2",
			"type": "text/html"
		}
	],
	"rel": [
		"https://assignments.api.brightspace.com/rels/assignment"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609/users/175', {
	"class": [
		"activity",
		"user-assignment-activity"
	],
	"entities": [
		{
			"class": [
				"date",
				"due-date"
			],
			"properties": {
				"date": "2017-09-01T19:32:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		},
		{
			"class": [
				"date",
				"end-date"
			],
			"properties": {
				"date": "2017-09-09T19:32:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		},
		{
			"class": [
				"completion",
				"incomplete"
			],
			"rel": [
				"item"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609/users/175"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/assignment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-11T18%3a48%3a45.814Z&end=2017-09-18T18%3a48%3a45.814Z', {
	"properties": {
		"start": "2017-09-11T18:48:45.814Z",
		"end": "2017-09-18T18:48:45.814Z"
	},
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-15T19:35:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/175"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/user-activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-11T18%3a48%3a45.814Z&end=2017-09-18T18%3a48%3a45.814Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-18T18%3a48%3a45.814Z&end=2017-09-25T18%3a48%3a45.814Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175?start=2017-09-04T18%3a48%3a45.814Z&end=2017-09-11T18%3a48%3a45.814Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/overdue"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175/overdue"
		}
	],
	"actions": [
		{
			"name": "select-custom-date-range",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/175",
			"fields": [
				{
					"name": "start",
					"type": "text",
					"value": "2017-09-11T18:48:45.814Z"
				},
				{
					"name": "end",
					"type": "text",
					"value": "2017-09-18T18:48:45.814Z"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-11T18%3a48%3a46.111Z&end=2017-09-18T18%3a48%3a46.111Z', {
	"properties": {
		"start": "2017-09-11T18:48:46.111Z",
		"end": "2017-09-18T18:48:46.111Z"
	},
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-15T19:35:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/178"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/user-activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-11T18%3a48%3a46.111Z&end=2017-09-18T18%3a48%3a46.111Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-18T18%3a48%3a46.111Z&end=2017-09-25T18%3a48%3a46.111Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-04T18%3a48%3a46.111Z&end=2017-09-11T18%3a48%3a46.111Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/overdue"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178/overdue"
		}
	],
	"actions": [
		{
			"name": "select-custom-date-range",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178",
			"fields": [
				{
					"name": "start",
					"type": "text",
					"value": "2017-09-11T18:48:46.111Z"
				},
				{
					"name": "end",
					"type": "text",
					"value": "2017-09-18T18:48:46.111Z"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0', {
	"class": [
		"enrollments",
		"collection"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178?search=&pageSize=20&embedDepth=0&sort=OrgUnitId&orgUnitTypeId=3&bookmark=&autoPinCourses=0"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6606"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/departments"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178/departments"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/semesters"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178/semesters"
		}
	],
	"actions": [
		{
			"name": "add-department-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 203
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		},
		{
			"name": "search-my-departments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178/departments",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "add-semester-filter",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 5
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		},
		{
			"name": "search-my-semesters",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178/semesters",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				}
			]
		},
		{
			"name": "search-my-enrollments",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.enrollments.api.proddev.d2l/users/178",
			"fields": [
				{
					"name": "search",
					"type": "search",
					"value": ""
				},
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "embedDepth",
					"type": "number",
					"value": 0
				},
				{
					"name": "sort",
					"type": "text",
					"value": "OrgUnitId"
				},
				{
					"name": "parentOrganizations",
					"type": "hidden",
					"value": ""
				},
				{
					"name": "orgUnitTypeId",
					"type": "hidden",
					"value": 3
				},
				{
					"name": "autoPinCourses",
					"type": "checkbox",
					"value": false
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3', {
	"class": [
		"topic",
		"text"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Forum01",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/3/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "TopicA",
		"description": "<p>TESTing</p>"
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/2/topics/4/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "TopicB",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		},
		{
			"name": "create-anonymous-thread",
			"title": "Create Anonymous Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/3/topics/5/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				},
				{
					"name": "isAnonymous",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4/topics/6', {
	"class": [
		"topic",
		"locked",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "TopicC",
		"description": "<p>desc=topicC</p>"
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4/topics/6"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6606/forums/4/topics/6/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://course-image-catalog.api.brightspace.com/images/a2de9109-8362-4913-8fb9-3607ea9c484d', {
	"class": [
		"course-image"
	],
	"properties": {
		"name": "structures_0014",
		"categories": [
			"default",
			"structures/support"
		],
		"tags": [
			"water",
			"bridge",
			"river",
			"travel",
			"architecture",
			"sky",
			"building",
			"city",
			"urban",
			"construction",
			"light",
			"transportation system",
			"sea",
			"tourism",
			"vacation",
			"reflection",
			"sight",
			"outdoors",
			"landmark"
		],
		"lastModified": 1485968984021
	},
	"entities": [
		{
			"class": [
				"color"
			],
			"properties": {
				"description": "vibrant",
				"r": 209,
				"g": 161,
				"b": 129
			},
			"rel": [
				"https://api.brightspace.com/rels/color"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://course-image-catalog.api.brightspace.com/images/a2de9109-8362-4913-8fb9-3607ea9c484d"
		},
		{
			"rel": [
				"via"
			],
			"href": "https://unsplash.com/photos/GuU5-3um85U"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/tile-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/tile-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/tile-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/tile-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/tile-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/tile-high-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-wide-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-wide-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-wide-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-wide-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-wide-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-wide-high-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-narrow-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-narrow-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-narrow-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-narrow-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-narrow-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/a2de9109-8362-4913-8fb9-3607ea9c484d/banner-narrow-high-density-min-size.jpg",
			"type": "image/jpeg"
		}
	],
	"rel": [
		"https://api.brightspace.com/rels/organization-image"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609', {
	"entities": [
		{
			"class": [
				"activity",
				"assignment-activity",
				"published"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-01T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"date",
						"end-date"
					],
					"properties": {
						"date": "2017-09-09T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			],
			"actions": [
				{
					"name": "set-draft",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1/setDraft/1"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			]
		},
		{
			"class": [
				"activity",
				"assignment-activity",
				"published"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-15T19:35:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			],
			"actions": [
				{
					"name": "set-draft",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2/setDraft/1"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			]
		},
		{
			"class": [
				"activity",
				"quiz-activity",
				"published"
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_6/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/quiz"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/6"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			]
		},
		{
			"class": [
				"activity",
				"quiz-activity",
				"published"
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_7/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/quiz"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/7"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-11T18%3a48%3a46.483Z&end=2017-09-18T18%3a48%3a46.483Z', {
	"properties": {
		"start": "2017-09-11T18:48:46.483Z",
		"end": "2017-09-18T18:48:46.483Z"
	},
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-15T19:35:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/175"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/user-activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-11T18%3a48%3a46.483Z&end=2017-09-18T18%3a48%3a46.483Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-18T18%3a48%3a46.483Z&end=2017-09-25T18%3a48%3a46.483Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-04T18%3a48%3a46.483Z&end=2017-09-11T18%3a48%3a46.483Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/overdue"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175/overdue"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609', {
	"class": [
		"sequence",
		"sequence-description"
	],
	"properties": {
		"title": "Course"
	},
	"entities": [
		{
			"properties": {
				"title": "SCORM Root"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "Lessons"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"properties": {
								"title": "Lesson 1"
							},
							"rel": [
								"item"
							],
							"entities": [
								{
									"links": [
										{
											"rel": [
												"about"
											],
											"href": "http://klx1-eknutson:44453/content/course1/word%20Html.htm"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97632/View"
										}
									],
									"class": [
										"activity",
										"link-activity",
										"link-scorm-2004"
									],
									"properties": {
										"title": "Lesson 1"
									},
									"rel": [
										"about",
										"item"
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"links": [
												{
													"rel": [
														"alternate"
													],
													"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/completion"
												}
											],
											"class": [
												"completion",
												"incomplete",
												"manual"
											]
										}
									],
									"actions": [
										{
											"name": "view-activity",
											"method": "POST",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
										},
										{
											"name": "view-activity-duration",
											"method": "PUT",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
										}
									]
								}
							],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
								},
								{
									"rel": [
										"next"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
								}
							],
							"class": [
								"sequenced-activity"
							]
						},
						{
							"properties": {
								"title": "Lesson 2"
							},
							"rel": [
								"item"
							],
							"entities": [
								{
									"links": [
										{
											"rel": [
												"about"
											],
											"href": "http://klx1-eknutson:44453/content/course1/mapc.jpg"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97633/View"
										}
									],
									"class": [
										"activity",
										"link-activity",
										"link-scorm-2004"
									],
									"properties": {
										"title": "Lesson 2"
									},
									"rel": [
										"about",
										"item"
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"links": [
												{
													"rel": [
														"alternate"
													],
													"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/completion"
												}
											],
											"class": [
												"completion",
												"incomplete",
												"manual"
											]
										}
									],
									"actions": [
										{
											"name": "view-activity",
											"method": "POST",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
										},
										{
											"name": "view-activity-duration",
											"method": "PUT",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
										}
									]
								}
							],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
								},
								{
									"rel": [
										"prev"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
								}
							],
							"class": [
								"sequenced-activity"
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
						}
					],
					"class": [
						"sequence",
						"sequence-description"
					]
				},
				{
					"properties": {
						"title": "Exams"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"properties": {
								"title": "Mid term"
							},
							"rel": [
								"item"
							],
							"entities": [
								{
									"links": [
										{
											"rel": [
												"about"
											],
											"href": "http://klx1-eknutson:44453/content/course1/survey_d2l_1094.xml"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97634/View"
										}
									],
									"class": [
										"activity",
										"link-activity",
										"link-scorm-2004"
									],
									"properties": {
										"title": "Mid term"
									},
									"rel": [
										"about",
										"item"
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"links": [
												{
													"rel": [
														"alternate"
													],
													"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/completion"
												}
											],
											"class": [
												"completion",
												"incomplete",
												"manual"
											]
										}
									],
									"actions": [
										{
											"name": "view-activity",
											"method": "POST",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
										},
										{
											"name": "view-activity-duration",
											"method": "PUT",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
										}
									]
								}
							],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
								},
								{
									"rel": [
										"next"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
								}
							],
							"class": [
								"sequenced-activity"
							]
						},
						{
							"properties": {
								"title": "Final Exam"
							},
							"rel": [
								"item"
							],
							"entities": [
								{
									"links": [
										{
											"rel": [
												"about"
											],
											"href": "http://klx1-eknutson:44453/content/course1/Survey%20(all%20question%20types)/survey_d2l_1094.xml"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97635/View"
										}
									],
									"class": [
										"activity",
										"link-activity",
										"link-scorm-2004"
									],
									"properties": {
										"title": "Final Exam"
									},
									"rel": [
										"about",
										"item"
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"links": [
												{
													"rel": [
														"alternate"
													],
													"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/completion"
												}
											],
											"class": [
												"completion",
												"incomplete",
												"manual"
											]
										}
									],
									"actions": [
										{
											"name": "view-activity",
											"method": "POST",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
										},
										{
											"name": "view-activity-duration",
											"method": "PUT",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
										}
									]
								}
							],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
								},
								{
									"rel": [
										"prev"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
								}
							],
							"class": [
								"sequenced-activity"
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
						}
					],
					"class": [
						"sequence",
						"sequence-description"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		},
		{
			"properties": {
				"title": "Normal Module"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "topic 3"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "y.txt",
								"title": "y.txt"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "y.txt",
										"title": "y.txt",
										"type": "text/plain"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "text/plain",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97639/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "text/plain",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97639/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-09-04T14:38:15.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "topic 2"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "mapc.jpg",
								"title": "mapc.jpg"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "mapc.jpg",
										"title": "mapc.jpg",
										"type": "image/jpeg"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "image/jpeg",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97638/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "image/jpeg",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97638/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-09-04T14:38:15.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "topic 1"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "word Html.htm",
								"title": "word Html.htm"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "word Html.htm",
										"title": "word Html.htm",
										"type": "text/html"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97637/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97637/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-09-04T14:38:15.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "asdf"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "asdf.html",
								"title": "asdf.html"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "asdf.html",
										"title": "asdf.html",
										"type": "text/html"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97640/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97640/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-12-01T14:59:12.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "My Test Content"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "My Test Content.html",
								"title": "My Test Content.html"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "My Test Content.html",
										"title": "My Test Content.html",
										"type": "text/html"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97641/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97641/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-11-27T22:11:11.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "Topic with comments"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "Topic with comments.html",
								"title": "Topic with comments.html"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "Topic with comments.html",
										"title": "Topic with comments.html",
										"type": "text/html"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97651/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97651/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-12-02T16:16:41.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
						}
					],
					"class": [
						"sequenced-activity"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		},
		{
			"properties": {
				"title": "Condition Module 1 (visit topic with comments)"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "Condition Topic 1 (visit My Test Content)"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "Condition Topic 1.html",
								"title": "Condition Topic 1.html"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "Condition Topic 1.html",
										"title": "Condition Topic 1.html",
										"type": "text/html"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97643/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97643/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-12-02T16:23:55.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "Normal Module 1"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"properties": {},
							"rel": [
								"item"
							],
							"entities": [],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97647"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
								}
							],
							"class": [
								"sequenced-activity"
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
						}
					],
					"class": [
						"sequence",
						"sequence-description"
					]
				},
				{
					"properties": {
						"title": "Date Module 1 (in range)"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"properties": {
								"title": "Date Module 2 (out of range)"
							},
							"rel": [
								"item"
							],
							"entities": [
								{
									"properties": {
										"title": "Date Module 3 (in range)"
									},
									"rel": [
										"item"
									],
									"entities": [
										{
											"properties": {},
											"rel": [
												"item"
											],
											"entities": [],
											"links": [
												{
													"rel": [
														"self",
														"describes"
													],
													"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97652"
												},
												{
													"rel": [
														"up"
													],
													"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
												}
											],
											"class": [
												"sequenced-activity"
											]
										}
									],
									"links": [
										{
											"rel": [
												"self",
												"describes"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
										},
										{
											"rel": [
												"up"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
										}
									],
									"class": [
										"sequence",
										"sequence-description"
									]
								}
							],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
								}
							],
							"class": [
								"sequence",
								"sequence-description"
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
						}
					],
					"class": [
						"sequence",
						"sequence-description"
					]
				},
				{
					"properties": {
						"title": "Condition Module 2 (My Test content)"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"properties": {
								"title": "Condition Topic 2 (visits asdf)"
							},
							"rel": [
								"item"
							],
							"entities": [
								{
									"class": [
										"activity",
										"file-activity"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "Condition Topic 2 (visit asdf).html",
										"title": "Condition Topic 2 (visit asdf).html"
									},
									"entities": [
										{
											"class": [
												"file"
											],
											"rel": [
												"about"
											],
											"properties": {
												"name": "Condition Topic 2 (visit asdf).html",
												"title": "Condition Topic 2 (visit asdf).html",
												"type": "text/html"
											},
											"links": [
												{
													"rel": [
														"alternate"
													],
													"type": "text/html",
													"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97654/file?stream=true"
												},
												{
													"rel": [
														"alternate"
													],
													"class": [
														"view"
													],
													"type": "text/html",
													"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97654/View"
												}
											],
											"entities": [
												{
													"rel": [
														"item"
													],
													"class": [
														"last-modified",
														"date"
													],
													"properties": {
														"date": "2008-12-02T16:41:16.000Z"
													}
												}
											]
										},
										{
											"rel": [
												"item"
											],
											"links": [
												{
													"rel": [
														"alternate"
													],
													"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/completion"
												}
											],
											"class": [
												"completion",
												"incomplete"
											]
										}
									],
									"actions": [
										{
											"name": "view-activity",
											"method": "POST",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
										},
										{
											"name": "view-activity-duration",
											"method": "PUT",
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
										}
									]
								}
							],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
								}
							],
							"class": [
								"sequenced-activity"
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
						}
					],
					"class": [
						"sequence",
						"sequence-description"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"up",
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609', {
	"class": [
		"forums",
		"collection"
	],
	"entities": [
		{
			"class": [
				"forum"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"properties": {
				"name": "Normal Forum",
				"description": {
					"Text": "",
					"Html": "<p>This forum is open and doesn&#39;t have any restrictions or additional settings enabled for it.</p>"
				}
			},
			"entities": [
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Normal topic",
						"description": "<p>This topic should always be accessible and does not have any special settings enabled.</p>\r\n<p></p>"
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"moderated",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Topic where messages must be approved",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"anonymousPosts",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Topic that allows anonymous messages",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						},
						{
							"name": "create-anonymous-thread",
							"title": "Create Anonymous Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								},
								{
									"name": "isAnonymous",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Users must post before participating in this topic",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "This topic has a start date in the future (May 7, 2014)",
						"description": "<p>This topic should not be available to students because the start date has not occurred.</p>\r\n<p></p>"
					},
					"entities": [
						{
							"class": [
								"start",
								"date"
							],
							"rel": [
								"https://api.brightspace.com/rels/date"
							],
							"properties": {
								"date": "2014-05-07T20:45:00.000Z"
							}
						}
					],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"locked",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "This topic is locked (no posting)",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/15"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/15/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "This topic is unlocked for a date range (Oct 1, 2012 - Oct 1, 2013)",
						"description": ""
					},
					"entities": [
						{
							"class": [
								"start",
								"unlocked",
								"date"
							],
							"rel": [
								"https://api.brightspace.com/rels/date"
							],
							"properties": {
								"date": "2012-10-01T14:00:00.000Z"
							}
						},
						{
							"class": [
								"end",
								"unlocked",
								"date"
							],
							"rel": [
								"https://api.brightspace.com/rels/date"
							],
							"properties": {
								"date": "2013-10-01T21:30:00.000Z"
							}
						}
					],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/16"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/16/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				},
				{
					"rel": [
						"organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			]
		},
		{
			"class": [
				"forum"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"properties": {
				"name": "Forum for assessment stuff",
				"description": {
					"Text": "",
					"Html": " "
				}
			},
			"entities": [
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Topic 1 - grade item, topic score only",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Topic 2 - grade item, messages scored, average",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Topic 3 - grade item, messages scored, average (include unscored as 0)",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				},
				{
					"class": [
						"topic",
						"html"
					],
					"rel": [
						"https://discussions.api.brightspace.com/rels/topic"
					],
					"properties": {
						"name": "Topic 4 - rubric assessment",
						"description": ""
					},
					"entities": [],
					"links": [
						{
							"rel": [
								"self"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20"
						},
						{
							"rel": [
								"up",
								"https://discussions.api.brightspace.com/rels/forum"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
						}
					],
					"actions": [
						{
							"name": "get-threads",
							"title": "Get Threads",
							"method": "GET",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20/threads",
							"fields": [
								{
									"name": "pageSize",
									"type": "number",
									"value": 20
								},
								{
									"name": "pageNumber",
									"type": "number",
									"value": 1
								}
							]
						},
						{
							"name": "create-thread",
							"title": "Create Thread",
							"method": "POST",
							"type": "application/x-www-form-urlencoded",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20/threads/create",
							"fields": [
								{
									"name": "subject",
									"type": "text"
								},
								{
									"name": "message",
									"type": "text"
								},
								{
									"name": "isHtml",
									"type": "checkbox"
								}
							]
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
				},
				{
					"rel": [
						"organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609', {
	"class": [
		"assignments",
		"home"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6609', {
	"properties": {
		"UnapprovedDiscussions": 0,
		"UnattemptedQuizzes": 2,
		"UngradedQuizzes": 0,
		"UnreadAssignmentFeedback": 0,
		"UnreadAssignmentSubmissions": 0,
		"UnreadDiscussions": 0
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6609/3', {
	"class": [
		"theme"
	],
	"properties": {
		"BackgroundColor": "#007795"
	},
	"entities": [
		{
			"class": [
				"image",
				"file"
			],
			"properties": {
				"alt": "My Home",
				"imageRelativePath": "/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504",
				"homeRelativePath": "/d2l/lp/ouHome/defaultHome.d2l"
			},
			"links": [
				{
					"rel": [
						"alternate"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504"
				},
				{
					"rel": [
						"https://themes.api.brightspace.com/rels/home"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/lp/ouHome/defaultHome.d2l"
				}
			],
			"rel": [
				"https://themes.api.brightspace.com/rels/logo"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6609/3"
		}
	]
})
window.D2L.EntityStore.update('https://course-image-catalog.api.brightspace.com/images/807f3773-1197-4c18-8974-77e4d70e1960', {
	"class": [
		"course-image"
	],
	"properties": {
		"name": "stars_0003",
		"categories": [
			"default",
			"stars"
		],
		"tags": [
			"astronomy",
			"galaxy",
			"moon",
			"exploration",
			"planet",
			"space",
			"outer",
			"nebula",
			"telescope",
			"cosmos",
			"science",
			"dust",
			"extraterrestrial being",
			"fantasy",
			"milky",
			"dark",
			"constellation",
			"ufo",
			"starry"
		],
		"lastModified": 1485968984016
	},
	"entities": [
		{
			"class": [
				"color"
			],
			"properties": {
				"description": "vibrant",
				"r": 195,
				"g": 125,
				"b": 44
			},
			"rel": [
				"https://api.brightspace.com/rels/color"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://course-image-catalog.api.brightspace.com/images/807f3773-1197-4c18-8974-77e4d70e1960"
		},
		{
			"rel": [
				"via"
			],
			"href": "https://unsplash.com/photos/oMpAz-DN-9I"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/tile-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/tile-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/tile-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/tile-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/tile-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/tile-high-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-wide-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-wide-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-wide-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-wide-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-wide-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-wide-high-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-narrow-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-narrow-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-narrow-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-narrow-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-narrow-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/807f3773-1197-4c18-8974-77e4d70e1960/banner-narrow-high-density-min-size.jpg",
			"type": "image/jpeg"
		}
	],
	"rel": [
		"https://api.brightspace.com/rels/organization-image"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613', {
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613/users/175?start=2017-09-11T18%3a48%3a46.769Z&end=2017-09-18T18%3a48%3a46.769Z', {
	"properties": {
		"start": "2017-09-11T18:48:46.769Z",
		"end": "2017-09-18T18:48:46.769Z"
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613/users/175?start=2017-09-11T18%3a48%3a46.769Z&end=2017-09-18T18%3a48%3a46.769Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613/users/175?start=2017-09-18T18%3a48%3a46.769Z&end=2017-09-25T18%3a48%3a46.769Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6613/users/175?start=2017-09-04T18%3a48%3a46.769Z&end=2017-09-11T18%3a48%3a46.769Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6613', {
	"class": [
		"sequence",
		"sequence-description"
	],
	"properties": {
		"title": "Course2"
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6613"
		},
		{
			"rel": [
				"up",
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6613', {
	"class": [
		"forums",
		"collection"
	],
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6613"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6613', {
	"class": [
		"assignments",
		"home"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6613"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6613', {
	"properties": {
		"UnapprovedDiscussions": 0,
		"UnattemptedQuizzes": 0,
		"UngradedQuizzes": 0,
		"UnreadAssignmentFeedback": 0,
		"UnreadAssignmentSubmissions": 0,
		"UnreadDiscussions": 0
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6613"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6613"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6613/3', {
	"class": [
		"theme"
	],
	"properties": {
		"BackgroundColor": "#007795"
	},
	"entities": [
		{
			"class": [
				"image",
				"file"
			],
			"properties": {
				"alt": "My Home",
				"imageRelativePath": "/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504",
				"homeRelativePath": "/d2l/lp/ouHome/defaultHome.d2l"
			},
			"links": [
				{
					"rel": [
						"alternate"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504"
				},
				{
					"rel": [
						"https://themes.api.brightspace.com/rels/home"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/lp/ouHome/defaultHome.d2l"
				}
			],
			"rel": [
				"https://themes.api.brightspace.com/rels/logo"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6613/3"
		}
	]
})
window.D2L.EntityStore.update('https://course-image-catalog.api.brightspace.com/images/09679190-7833-448b-8183-1b1ca0f60969', {
	"class": [
		"course-image"
	],
	"properties": {
		"name": "mountain_0005",
		"categories": [
			"default",
			"mountain"
		],
		"tags": [
			"mountain",
			"snow",
			"landscape",
			"travel",
			"sky",
			"nature",
			"wood",
			"lake",
			"outdoors",
			"scenic",
			"water",
			"ice",
			"mountain peak",
			"winter",
			"valley",
			"tree",
			"panorama",
			"high"
		],
		"lastModified": 1485968984010
	},
	"entities": [
		{
			"class": [
				"color"
			],
			"properties": {
				"description": "vibrant",
				"r": 32,
				"g": 40,
				"b": 172
			},
			"rel": [
				"https://api.brightspace.com/rels/color"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://course-image-catalog.api.brightspace.com/images/09679190-7833-448b-8183-1b1ca0f60969"
		},
		{
			"rel": [
				"via"
			],
			"href": "https://stocksnap.io/photo/A808714D61"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/tile-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/tile-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/tile-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/tile-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/tile-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"tile",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/tile-high-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-wide-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-wide-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-wide-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-wide-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-wide-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"wide",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-wide-high-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-narrow-low-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"max"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-narrow-high-density-max-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-narrow-low-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"mid"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-narrow-high-density-mid-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"low-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-narrow-low-density-min-size.jpg",
			"type": "image/jpeg"
		},
		{
			"rel": [
				"alternate"
			],
			"class": [
				"banner",
				"narrow",
				"high-density",
				"min"
			],
			"href": "https://s.brightspace.com/course-images/images/09679190-7833-448b-8183-1b1ca0f60969/banner-narrow-high-density-min-size.jpg",
			"type": "image/jpeg"
		}
	],
	"rel": [
		"https://api.brightspace.com/rels/organization-image"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614', {
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614/users/175?start=2017-09-11T18%3a48%3a46.976Z&end=2017-09-18T18%3a48%3a46.976Z', {
	"properties": {
		"start": "2017-09-11T18:48:46.976Z",
		"end": "2017-09-18T18:48:46.976Z"
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614/users/175?start=2017-09-11T18%3a48%3a46.976Z&end=2017-09-18T18%3a48%3a46.976Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614/users/175?start=2017-09-18T18%3a48%3a46.976Z&end=2017-09-25T18%3a48%3a46.976Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6614/users/175?start=2017-09-04T18%3a48%3a46.976Z&end=2017-09-11T18%3a48%3a46.976Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6614', {
	"class": [
		"sequence",
		"sequence-description"
	],
	"properties": {
		"title": "Course3"
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6614"
		},
		{
			"rel": [
				"up",
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6614', {
	"class": [
		"forums",
		"collection"
	],
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6614"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6614', {
	"class": [
		"assignments",
		"home"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6614"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6614', {
	"properties": {
		"UnapprovedDiscussions": 0,
		"UnattemptedQuizzes": 0,
		"UngradedQuizzes": 0,
		"UnreadAssignmentFeedback": 0,
		"UnreadAssignmentSubmissions": 0,
		"UnreadDiscussions": 0
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.notifications.api.proddev.d2l/my-notifications/organizations/6614"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6614"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6614/3', {
	"class": [
		"theme"
	],
	"properties": {
		"BackgroundColor": "#007795"
	},
	"entities": [
		{
			"class": [
				"image",
				"file"
			],
			"properties": {
				"alt": "My Home",
				"imageRelativePath": "/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504",
				"homeRelativePath": "/d2l/lp/ouHome/defaultHome.d2l"
			},
			"links": [
				{
					"rel": [
						"alternate"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/common/files/platform/navbar/logo_slim.png?v=10.7.6.0-0809504"
				},
				{
					"rel": [
						"https://themes.api.brightspace.com/rels/home"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/lp/ouHome/defaultHome.d2l"
				}
			],
			"rel": [
				"https://themes.api.brightspace.com/rels/logo"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.themes.api.proddev.d2l/6614/3"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609', {
	"class": [
		"activity",
		"assignment-activity",
		"published"
	],
	"entities": [
		{
			"class": [
				"date",
				"due-date"
			],
			"properties": {
				"date": "2017-09-01T19:32:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		},
		{
			"class": [
				"date",
				"end-date"
			],
			"properties": {
				"date": "2017-09-09T19:32:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/assignment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
		}
	],
	"actions": [
		{
			"name": "set-draft",
			"method": "POST",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1/setDraft/1"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1', {
	"class": [
		"assignment"
	],
	"properties": {
		"name": "Assignment 1",
		"dueDate": "2017-09-01T19:32:00.000Z",
		"draft": false
	},
	"entities": [
		{
			"class": [
				"attachments"
			],
			"rel": [
				"https://assignments.api.brightspace.com/rels/attachments"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
		},
		{
			"rel": [
				"service"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"alternate"
			],
			"href": "http://KLX1-EKNUTSON:44453/d2l/lms/dropbox/user/folder_submit_files.d2l?ou=6609&db=1",
			"type": "text/html"
		}
	],
	"rel": [
		"https://assignments.api.brightspace.com/rels/assignment"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/178', {
	"class": [
		"activity",
		"user-assignment-activity"
	],
	"entities": [
		{
			"class": [
				"date",
				"due-date"
			],
			"properties": {
				"date": "2017-09-15T19:35:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		},
		{
			"class": [
				"completion",
				"incomplete"
			],
			"rel": [
				"item"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/178"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/assignment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178/overdue', {
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-01T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"date",
						"end-date"
					],
					"properties": {
						"date": "2017-09-09T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609/users/178"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
				}
			],
			"rel": [
				"https://api.brightspace.com/rels/user-activity-usage",
				"activities"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178/overdue"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-11T18%3a48%3a50.686Z&end=2017-09-18T18%3a48%3a50.686Z"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_6/usages/6609', {
	"class": [
		"activity",
		"quiz-activity",
		"published"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_6/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/quiz"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/6"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_7/usages/6609', {
	"class": [
		"activity",
		"quiz-activity",
		"published"
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_7/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/quiz"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/7"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175/overdue', {
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-01T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"date",
						"end-date"
					],
					"properties": {
						"date": "2017-09-09T19:32:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609/users/175"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/user-activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175/overdue"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-11T18%3a48%3a51.163Z&end=2017-09-18T18%3a48%3a51.163Z"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629', {
	"properties": {
		"title": "SCORM Root"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "Lessons"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "Lesson 1"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"links": [
								{
									"rel": [
										"about"
									],
									"href": "http://klx1-eknutson:44453/content/course1/word%20Html.htm"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97632/View"
								}
							],
							"class": [
								"activity",
								"link-activity",
								"link-scorm-2004"
							],
							"properties": {
								"title": "Lesson 1"
							},
							"rel": [
								"about",
								"item"
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/completion"
										}
									],
									"class": [
										"completion",
										"incomplete",
										"manual"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "Lesson 2"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"links": [
								{
									"rel": [
										"about"
									],
									"href": "http://klx1-eknutson:44453/content/course1/mapc.jpg"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97633/View"
								}
							],
							"class": [
								"activity",
								"link-activity",
								"link-scorm-2004"
							],
							"properties": {
								"title": "Lesson 2"
							},
							"rel": [
								"about",
								"item"
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/completion"
										}
									],
									"class": [
										"completion",
										"incomplete",
										"manual"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
						}
					],
					"class": [
						"sequenced-activity"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		},
		{
			"properties": {
				"title": "Exams"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "Mid term"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"links": [
								{
									"rel": [
										"about"
									],
									"href": "http://klx1-eknutson:44453/content/course1/survey_d2l_1094.xml"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97634/View"
								}
							],
							"class": [
								"activity",
								"link-activity",
								"link-scorm-2004"
							],
							"properties": {
								"title": "Mid term"
							},
							"rel": [
								"about",
								"item"
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/completion"
										}
									],
									"class": [
										"completion",
										"incomplete",
										"manual"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
						},
						{
							"rel": [
								"next"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
						}
					],
					"class": [
						"sequenced-activity"
					]
				},
				{
					"properties": {
						"title": "Final Exam"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"links": [
								{
									"rel": [
										"about"
									],
									"href": "http://klx1-eknutson:44453/content/course1/Survey%20(all%20question%20types)/survey_d2l_1094.xml"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97635/View"
								}
							],
							"class": [
								"activity",
								"link-activity",
								"link-scorm-2004"
							],
							"properties": {
								"title": "Final Exam"
							},
							"rel": [
								"about",
								"item"
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/completion"
										}
									],
									"class": [
										"completion",
										"incomplete",
										"manual"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
						},
						{
							"rel": [
								"prev"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
						}
					],
					"class": [
						"sequenced-activity"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636', {
	"properties": {
		"title": "Normal Module"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "topic 3"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "y.txt",
						"title": "y.txt"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "y.txt",
								"title": "y.txt",
								"type": "text/plain"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "text/plain",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97639/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "text/plain",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97639/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-09-04T14:38:15.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "topic 2"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "mapc.jpg",
						"title": "mapc.jpg"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "mapc.jpg",
								"title": "mapc.jpg",
								"type": "image/jpeg"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "image/jpeg",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97638/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "image/jpeg",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97638/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-09-04T14:38:15.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "topic 1"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "word Html.htm",
						"title": "word Html.htm"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "word Html.htm",
								"title": "word Html.htm",
								"type": "text/html"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97637/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97637/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-09-04T14:38:15.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "asdf"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "asdf.html",
						"title": "asdf.html"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "asdf.html",
								"title": "asdf.html",
								"type": "text/html"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97640/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97640/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-12-01T14:59:12.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "My Test Content"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "My Test Content.html",
						"title": "My Test Content.html"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "My Test Content.html",
								"title": "My Test Content.html",
								"type": "text/html"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97641/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97641/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-11-27T22:11:11.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "Topic with comments"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "Topic with comments.html",
						"title": "Topic with comments.html"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "Topic with comments.html",
								"title": "Topic with comments.html",
								"type": "text/html"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97651/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97651/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-12-02T16:16:41.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
				}
			],
			"class": [
				"sequenced-activity"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642', {
	"properties": {
		"title": "Condition Module 1 (visit topic with comments)"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "Condition Topic 1 (visit My Test Content)"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "Condition Topic 1.html",
						"title": "Condition Topic 1.html"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "Condition Topic 1.html",
								"title": "Condition Topic 1.html",
								"type": "text/html"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97643/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97643/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-12-02T16:23:55.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "Normal Module 1"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {},
					"rel": [
						"item"
					],
					"entities": [],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97647"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
						}
					],
					"class": [
						"sequenced-activity"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		},
		{
			"properties": {
				"title": "Date Module 1 (in range)"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "Date Module 2 (out of range)"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"properties": {
								"title": "Date Module 3 (in range)"
							},
							"rel": [
								"item"
							],
							"entities": [
								{
									"properties": {},
									"rel": [
										"item"
									],
									"entities": [],
									"links": [
										{
											"rel": [
												"self",
												"describes"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97652"
										},
										{
											"rel": [
												"up"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
										}
									],
									"class": [
										"sequenced-activity"
									]
								}
							],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
								}
							],
							"class": [
								"sequence",
								"sequence-description"
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
						}
					],
					"class": [
						"sequence",
						"sequence-description"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		},
		{
			"properties": {
				"title": "Condition Module 2 (My Test content)"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "Condition Topic 2 (visits asdf)"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"class": [
								"activity",
								"file-activity"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "Condition Topic 2 (visit asdf).html",
								"title": "Condition Topic 2 (visit asdf).html"
							},
							"entities": [
								{
									"class": [
										"file"
									],
									"rel": [
										"about"
									],
									"properties": {
										"name": "Condition Topic 2 (visit asdf).html",
										"title": "Condition Topic 2 (visit asdf).html",
										"type": "text/html"
									},
									"links": [
										{
											"rel": [
												"alternate"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97654/file?stream=true"
										},
										{
											"rel": [
												"alternate"
											],
											"class": [
												"view"
											],
											"type": "text/html",
											"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97654/View"
										}
									],
									"entities": [
										{
											"rel": [
												"item"
											],
											"class": [
												"last-modified",
												"date"
											],
											"properties": {
												"date": "2008-12-02T16:41:16.000Z"
											}
										}
									]
								},
								{
									"rel": [
										"item"
									],
									"links": [
										{
											"rel": [
												"alternate"
											],
											"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/completion"
										}
									],
									"class": [
										"completion",
										"incomplete"
									]
								}
							],
							"actions": [
								{
									"name": "view-activity",
									"method": "POST",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
								},
								{
									"name": "view-activity-duration",
									"method": "PUT",
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
								}
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
						}
					],
					"class": [
						"sequenced-activity"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5', {
	"class": [
		"forum"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/forum"
	],
	"properties": {
		"name": "Normal Forum",
		"description": {
			"Text": "",
			"Html": "<p>This forum is open and doesn&#39;t have any restrictions or additional settings enabled for it.</p>"
		}
	},
	"entities": [
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Normal topic",
				"description": "<p>This topic should always be accessible and does not have any special settings enabled.</p>\r\n<p></p>"
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"moderated",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Topic where messages must be approved",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"anonymousPosts",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Topic that allows anonymous messages",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				},
				{
					"name": "create-anonymous-thread",
					"title": "Create Anonymous Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						},
						{
							"name": "isAnonymous",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Users must post before participating in this topic",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "This topic has a start date in the future (May 7, 2014)",
				"description": "<p>This topic should not be available to students because the start date has not occurred.</p>\r\n<p></p>"
			},
			"entities": [
				{
					"class": [
						"start",
						"date"
					],
					"rel": [
						"https://api.brightspace.com/rels/date"
					],
					"properties": {
						"date": "2014-05-07T20:45:00.000Z"
					}
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"locked",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "This topic is locked (no posting)",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/15"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/15/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "This topic is unlocked for a date range (Oct 1, 2012 - Oct 1, 2013)",
				"description": ""
			},
			"entities": [
				{
					"class": [
						"start",
						"unlocked",
						"date"
					],
					"rel": [
						"https://api.brightspace.com/rels/date"
					],
					"properties": {
						"date": "2012-10-01T14:00:00.000Z"
					}
				},
				{
					"class": [
						"end",
						"unlocked",
						"date"
					],
					"rel": [
						"https://api.brightspace.com/rels/date"
					],
					"properties": {
						"date": "2013-10-01T21:30:00.000Z"
					}
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/16"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/16/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		},
		{
			"rel": [
				"organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6', {
	"class": [
		"forum"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/forum"
	],
	"properties": {
		"name": "Forum for assessment stuff",
		"description": {
			"Text": "",
			"Html": " "
		}
	},
	"entities": [
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Topic 1 - grade item, topic score only",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Topic 2 - grade item, messages scored, average",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Topic 3 - grade item, messages scored, average (include unscored as 0)",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		},
		{
			"class": [
				"topic",
				"html"
			],
			"rel": [
				"https://discussions.api.brightspace.com/rels/topic"
			],
			"properties": {
				"name": "Topic 4 - rubric assessment",
				"description": ""
			},
			"entities": [],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20"
				},
				{
					"rel": [
						"up",
						"https://discussions.api.brightspace.com/rels/forum"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
				}
			],
			"actions": [
				{
					"name": "get-threads",
					"title": "Get Threads",
					"method": "GET",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20/threads",
					"fields": [
						{
							"name": "pageSize",
							"type": "number",
							"value": 20
						},
						{
							"name": "pageNumber",
							"type": "number",
							"value": 1
						}
					]
				},
				{
					"name": "create-thread",
					"title": "Create Thread",
					"method": "POST",
					"type": "application/x-www-form-urlencoded",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20/threads/create",
					"fields": [
						{
							"name": "subject",
							"type": "text"
						},
						{
							"name": "message",
							"type": "text"
						},
						{
							"name": "isHtml",
							"type": "checkbox"
						}
					]
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
		},
		{
			"rel": [
				"organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609/users/178', {
	"class": [
		"activity",
		"user-assignment-activity"
	],
	"entities": [
		{
			"class": [
				"date",
				"due-date"
			],
			"properties": {
				"date": "2017-09-01T19:32:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		},
		{
			"class": [
				"date",
				"end-date"
			],
			"properties": {
				"date": "2017-09-09T19:32:00.000Z"
			},
			"rel": [
				"https://api.brightspace.com/rels/date"
			]
		},
		{
			"class": [
				"completion",
				"incomplete"
			],
			"rel": [
				"item"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609/users/178"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_1/usages/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/user"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/assignment"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/1"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-11T18%3a48%3a50.686Z&end=2017-09-18T18%3a48%3a50.686Z', {
	"properties": {
		"start": "2017-09-11T18:48:50.686Z",
		"end": "2017-09-18T18:48:50.686Z"
	},
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-15T19:35:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/178"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/178"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/user-activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-11T18%3a48%3a50.686Z&end=2017-09-18T18%3a48%3a50.686Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-18T18%3a48%3a50.686Z&end=2017-09-25T18%3a48%3a50.686Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178?start=2017-09-04T18%3a48%3a50.686Z&end=2017-09-11T18%3a48%3a50.686Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/overdue"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178/overdue"
		}
	],
	"actions": [
		{
			"name": "select-custom-date-range",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/users/178",
			"fields": [
				{
					"name": "start",
					"type": "text",
					"value": "2017-09-11T18:48:50.686Z"
				},
				{
					"name": "end",
					"type": "text",
					"value": "2017-09-18T18:48:50.686Z"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/6', {
	"class": [
		"quiz"
	],
	"properties": {
		"name": "Item Analysis Test - No Attempts",
		"description": null
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/6"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_6/usages/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/7', {
	"class": [
		"quiz"
	],
	"properties": {
		"name": "Item Analysis Test - With Attempts",
		"description": null
	},
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.quizzes.api.proddev.d2l/6609/quizzes/7"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/activity-usage"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_51000_7/usages/6609"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-11T18%3a48%3a51.163Z&end=2017-09-18T18%3a48%3a51.163Z', {
	"properties": {
		"start": "2017-09-11T18:48:51.163Z",
		"end": "2017-09-18T18:48:51.163Z"
	},
	"entities": [
		{
			"class": [
				"activity",
				"user-assignment-activity"
			],
			"entities": [
				{
					"class": [
						"date",
						"due-date"
					],
					"properties": {
						"date": "2017-09-15T19:35:00.000Z"
					},
					"rel": [
						"https://api.brightspace.com/rels/date"
					]
				},
				{
					"class": [
						"completion",
						"incomplete"
					],
					"rel": [
						"item"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609/users/175"
				},
				{
					"rel": [
						"https://activities.api.brightspace.com/rels/activity-usage"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activities/6606_2000_2/usages/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/user"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.users.api.proddev.d2l/175"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/assignment"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.assignments.api.proddev.d2l/6609/folders/2"
				},
				{
					"rel": [
						"https://api.brightspace.com/rels/organization"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
				}
			],
			"rel": [
				"https://activities.api.brightspace.com/rels/user-activity-usage"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-11T18%3a48%3a51.163Z&end=2017-09-18T18%3a48%3a51.163Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/next-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-18T18%3a48%3a51.163Z&end=2017-09-25T18%3a48%3a51.163Z"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/previous-period"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175?start=2017-09-04T18%3a48%3a51.163Z&end=2017-09-11T18%3a48%3a51.163Z"
		},
		{
			"rel": [
				"https://api.brightspace.com/rels/organization"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.organizations.api.proddev.d2l/6609"
		},
		{
			"rel": [
				"https://activities.api.brightspace.com/rels/overdue"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.activities.api.proddev.d2l/activityusages/6609/users/175/overdue"
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630', {
	"properties": {
		"title": "Lessons"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "Lesson 1"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"links": [
						{
							"rel": [
								"about"
							],
							"href": "http://klx1-eknutson:44453/content/course1/word%20Html.htm"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97632/View"
						}
					],
					"class": [
						"activity",
						"link-activity",
						"link-scorm-2004"
					],
					"properties": {
						"title": "Lesson 1"
					},
					"rel": [
						"about",
						"item"
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/completion"
								}
							],
							"class": [
								"completion",
								"incomplete",
								"manual"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "Lesson 2"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"links": [
						{
							"rel": [
								"about"
							],
							"href": "http://klx1-eknutson:44453/content/course1/mapc.jpg"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97633/View"
						}
					],
					"class": [
						"activity",
						"link-activity",
						"link-scorm-2004"
					],
					"properties": {
						"title": "Lesson 2"
					},
					"rel": [
						"about",
						"item"
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/completion"
								}
							],
							"class": [
								"completion",
								"incomplete",
								"manual"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
				}
			],
			"class": [
				"sequenced-activity"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631', {
	"properties": {
		"title": "Exams"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "Mid term"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"links": [
						{
							"rel": [
								"about"
							],
							"href": "http://klx1-eknutson:44453/content/course1/survey_d2l_1094.xml"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97634/View"
						}
					],
					"class": [
						"activity",
						"link-activity",
						"link-scorm-2004"
					],
					"properties": {
						"title": "Mid term"
					},
					"rel": [
						"about",
						"item"
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/completion"
								}
							],
							"class": [
								"completion",
								"incomplete",
								"manual"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
				},
				{
					"rel": [
						"next"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
				}
			],
			"class": [
				"sequenced-activity"
			]
		},
		{
			"properties": {
				"title": "Final Exam"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"links": [
						{
							"rel": [
								"about"
							],
							"href": "http://klx1-eknutson:44453/content/course1/Survey%20(all%20question%20types)/survey_d2l_1094.xml"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97635/View"
						}
					],
					"class": [
						"activity",
						"link-activity",
						"link-scorm-2004"
					],
					"properties": {
						"title": "Final Exam"
					},
					"rel": [
						"about",
						"item"
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/completion"
								}
							],
							"class": [
								"completion",
								"incomplete",
								"manual"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
				},
				{
					"rel": [
						"prev"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
				}
			],
			"class": [
				"sequenced-activity"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97629"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639', {
	"properties": {
		"title": "topic 3"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "y.txt",
				"title": "y.txt"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "y.txt",
						"title": "y.txt",
						"type": "text/plain"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "text/plain",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97639/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "text/plain",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97639/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-09-04T14:38:15.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638', {
	"properties": {
		"title": "topic 2"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "mapc.jpg",
				"title": "mapc.jpg"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "mapc.jpg",
						"title": "mapc.jpg",
						"type": "image/jpeg"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "image/jpeg",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97638/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "image/jpeg",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97638/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-09-04T14:38:15.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97639"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637', {
	"properties": {
		"title": "topic 1"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "word Html.htm",
				"title": "word Html.htm"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "word Html.htm",
						"title": "word Html.htm",
						"type": "text/html"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97637/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97637/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-09-04T14:38:15.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97638"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640', {
	"properties": {
		"title": "asdf"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "asdf.html",
				"title": "asdf.html"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "asdf.html",
						"title": "asdf.html",
						"type": "text/html"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97640/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97640/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-12-01T14:59:12.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97637"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641', {
	"properties": {
		"title": "My Test Content"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "My Test Content.html",
				"title": "My Test Content.html"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "My Test Content.html",
						"title": "My Test Content.html",
						"type": "text/html"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97641/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97641/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-11-27T22:11:11.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97640"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651', {
	"properties": {
		"title": "Topic with comments"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "Topic with comments.html",
				"title": "Topic with comments.html"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "Topic with comments.html",
						"title": "Topic with comments.html",
						"type": "text/html"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97651/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97651/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-12-02T16:16:41.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97651"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97641"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97636"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643', {
	"properties": {
		"title": "Condition Topic 1 (visit My Test Content)"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "Condition Topic 1.html",
				"title": "Condition Topic 1.html"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "Condition Topic 1.html",
						"title": "Condition Topic 1.html",
						"type": "text/html"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97643/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97643/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-12-02T16:23:55.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97643"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646', {
	"properties": {
		"title": "Normal Module 1"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {},
			"rel": [
				"item"
			],
			"entities": [],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97647"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
				}
			],
			"class": [
				"sequenced-activity"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97644"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648', {
	"properties": {
		"title": "Date Module 1 (in range)"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "Date Module 2 (out of range)"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {
						"title": "Date Module 3 (in range)"
					},
					"rel": [
						"item"
					],
					"entities": [
						{
							"properties": {},
							"rel": [
								"item"
							],
							"entities": [],
							"links": [
								{
									"rel": [
										"self",
										"describes"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97652"
								},
								{
									"rel": [
										"up"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
								}
							],
							"class": [
								"sequenced-activity"
							]
						}
					],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
						}
					],
					"class": [
						"sequence",
						"sequence-description"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653', {
	"properties": {
		"title": "Condition Module 2 (My Test content)"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "Condition Topic 2 (visits asdf)"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"class": [
						"activity",
						"file-activity"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "Condition Topic 2 (visit asdf).html",
						"title": "Condition Topic 2 (visit asdf).html"
					},
					"entities": [
						{
							"class": [
								"file"
							],
							"rel": [
								"about"
							],
							"properties": {
								"name": "Condition Topic 2 (visit asdf).html",
								"title": "Condition Topic 2 (visit asdf).html",
								"type": "text/html"
							},
							"links": [
								{
									"rel": [
										"alternate"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97654/file?stream=true"
								},
								{
									"rel": [
										"alternate"
									],
									"class": [
										"view"
									],
									"type": "text/html",
									"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97654/View"
								}
							],
							"entities": [
								{
									"rel": [
										"item"
									],
									"class": [
										"last-modified",
										"date"
									],
									"properties": {
										"date": "2008-12-02T16:41:16.000Z"
									}
								}
							]
						},
						{
							"rel": [
								"item"
							],
							"links": [
								{
									"rel": [
										"alternate"
									],
									"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/completion"
								}
							],
							"class": [
								"completion",
								"incomplete"
							]
						}
					],
					"actions": [
						{
							"name": "view-activity",
							"method": "POST",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
						},
						{
							"name": "view-activity-duration",
							"method": "PUT",
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
						}
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
				}
			],
			"class": [
				"sequenced-activity"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97642"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Normal topic",
		"description": "<p>This topic should always be accessible and does not have any special settings enabled.</p>\r\n<p></p>"
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/7/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8', {
	"class": [
		"topic",
		"moderated",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Topic where messages must be approved",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/8/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9', {
	"class": [
		"topic",
		"anonymousPosts",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Topic that allows anonymous messages",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		},
		{
			"name": "create-anonymous-thread",
			"title": "Create Anonymous Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/9/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				},
				{
					"name": "isAnonymous",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Users must post before participating in this topic",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/10/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "This topic has a start date in the future (May 7, 2014)",
		"description": "<p>This topic should not be available to students because the start date has not occurred.</p>\r\n<p></p>"
	},
	"entities": [
		{
			"class": [
				"start",
				"date"
			],
			"rel": [
				"https://api.brightspace.com/rels/date"
			],
			"properties": {
				"date": "2014-05-07T20:45:00.000Z"
			}
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/14/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/15', {
	"class": [
		"topic",
		"locked",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "This topic is locked (no posting)",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/15"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/15/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/16', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "This topic is unlocked for a date range (Oct 1, 2012 - Oct 1, 2013)",
		"description": ""
	},
	"entities": [
		{
			"class": [
				"start",
				"unlocked",
				"date"
			],
			"rel": [
				"https://api.brightspace.com/rels/date"
			],
			"properties": {
				"date": "2012-10-01T14:00:00.000Z"
			}
		},
		{
			"class": [
				"end",
				"unlocked",
				"date"
			],
			"rel": [
				"https://api.brightspace.com/rels/date"
			],
			"properties": {
				"date": "2013-10-01T21:30:00.000Z"
			}
		}
	],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/16"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/5/topics/16/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Topic 1 - grade item, topic score only",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/17/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Topic 2 - grade item, messages scored, average",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/18/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Topic 3 - grade item, messages scored, average (include unscored as 0)",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/19/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20', {
	"class": [
		"topic",
		"html"
	],
	"rel": [
		"https://discussions.api.brightspace.com/rels/topic"
	],
	"properties": {
		"name": "Topic 4 - rubric assessment",
		"description": ""
	},
	"entities": [],
	"links": [
		{
			"rel": [
				"self"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20"
		},
		{
			"rel": [
				"up",
				"https://discussions.api.brightspace.com/rels/forum"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6"
		}
	],
	"actions": [
		{
			"name": "get-threads",
			"title": "Get Threads",
			"method": "GET",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20/threads",
			"fields": [
				{
					"name": "pageSize",
					"type": "number",
					"value": 20
				},
				{
					"name": "pageNumber",
					"type": "number",
					"value": 1
				}
			]
		},
		{
			"name": "create-thread",
			"title": "Create Thread",
			"method": "POST",
			"type": "application/x-www-form-urlencoded",
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.discussions.api.proddev.d2l/6609/forums/6/topics/20/threads/create",
			"fields": [
				{
					"name": "subject",
					"type": "text"
				},
				{
					"name": "message",
					"type": "text"
				},
				{
					"name": "isHtml",
					"type": "checkbox"
				}
			]
		}
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632', {
	"properties": {
		"title": "Lesson 1"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"links": [
				{
					"rel": [
						"about"
					],
					"href": "http://klx1-eknutson:44453/content/course1/word%20Html.htm"
				},
				{
					"rel": [
						"alternate"
					],
					"class": [
						"view"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97632/View"
				}
			],
			"class": [
				"activity",
				"link-activity",
				"link-scorm-2004"
			],
			"properties": {
				"title": "Lesson 1"
			},
			"rel": [
				"about",
				"item"
			],
			"entities": [
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/completion"
						}
					],
					"class": [
						"completion",
						"incomplete",
						"manual"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633', {
	"properties": {
		"title": "Lesson 2"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"links": [
				{
					"rel": [
						"about"
					],
					"href": "http://klx1-eknutson:44453/content/course1/mapc.jpg"
				},
				{
					"rel": [
						"alternate"
					],
					"class": [
						"view"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97633/View"
				}
			],
			"class": [
				"activity",
				"link-activity",
				"link-scorm-2004"
			],
			"properties": {
				"title": "Lesson 2"
			},
			"rel": [
				"about",
				"item"
			],
			"entities": [
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/completion"
						}
					],
					"class": [
						"completion",
						"incomplete",
						"manual"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97633"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97632"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97630"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634', {
	"properties": {
		"title": "Mid term"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"links": [
				{
					"rel": [
						"about"
					],
					"href": "http://klx1-eknutson:44453/content/course1/survey_d2l_1094.xml"
				},
				{
					"rel": [
						"alternate"
					],
					"class": [
						"view"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97634/View"
				}
			],
			"class": [
				"activity",
				"link-activity",
				"link-scorm-2004"
			],
			"properties": {
				"title": "Mid term"
			},
			"rel": [
				"about",
				"item"
			],
			"entities": [
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/completion"
						}
					],
					"class": [
						"completion",
						"incomplete",
						"manual"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
		},
		{
			"rel": [
				"next"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635', {
	"properties": {
		"title": "Final Exam"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"links": [
				{
					"rel": [
						"about"
					],
					"href": "http://klx1-eknutson:44453/content/course1/Survey%20(all%20question%20types)/survey_d2l_1094.xml"
				},
				{
					"rel": [
						"alternate"
					],
					"class": [
						"view"
					],
					"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97635/View"
				}
			],
			"class": [
				"activity",
				"link-activity",
				"link-scorm-2004"
			],
			"properties": {
				"title": "Final Exam"
			},
			"rel": [
				"about",
				"item"
			],
			"entities": [
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/completion"
						}
					],
					"class": [
						"completion",
						"incomplete",
						"manual"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97635"
		},
		{
			"rel": [
				"prev"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97634"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97631"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97647', {
	"properties": {},
	"rel": [
		"item"
	],
	"entities": [],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97647"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97646"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649', {
	"properties": {
		"title": "Date Module 2 (out of range)"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {
				"title": "Date Module 3 (in range)"
			},
			"rel": [
				"item"
			],
			"entities": [
				{
					"properties": {},
					"rel": [
						"item"
					],
					"entities": [],
					"links": [
						{
							"rel": [
								"self",
								"describes"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97652"
						},
						{
							"rel": [
								"up"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
						}
					],
					"class": [
						"sequenced-activity"
					]
				}
			],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
				}
			],
			"class": [
				"sequence",
				"sequence-description"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97648"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654', {
	"properties": {
		"title": "Condition Topic 2 (visits asdf)"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"class": [
				"activity",
				"file-activity"
			],
			"rel": [
				"about"
			],
			"properties": {
				"name": "Condition Topic 2 (visit asdf).html",
				"title": "Condition Topic 2 (visit asdf).html"
			},
			"entities": [
				{
					"class": [
						"file"
					],
					"rel": [
						"about"
					],
					"properties": {
						"name": "Condition Topic 2 (visit asdf).html",
						"title": "Condition Topic 2 (visit asdf).html",
						"type": "text/html"
					},
					"links": [
						{
							"rel": [
								"alternate"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/api/le/1.12/6609/content/topics/97654/file?stream=true"
						},
						{
							"rel": [
								"alternate"
							],
							"class": [
								"view"
							],
							"type": "text/html",
							"href": "http://KLX1-EKNUTSON:44453/d2l/le/content/6609/viewContent/97654/View"
						}
					],
					"entities": [
						{
							"rel": [
								"item"
							],
							"class": [
								"last-modified",
								"date"
							],
							"properties": {
								"date": "2008-12-02T16:41:16.000Z"
							}
						}
					]
				},
				{
					"rel": [
						"item"
					],
					"links": [
						{
							"rel": [
								"alternate"
							],
							"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/completion"
						}
					],
					"class": [
						"completion",
						"incomplete"
					]
				}
			],
			"actions": [
				{
					"name": "view-activity",
					"method": "POST",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
				},
				{
					"name": "view-activity-duration",
					"method": "PUT",
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654/view"
				}
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97654"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97653"
		}
	],
	"class": [
		"sequenced-activity"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650', {
	"properties": {
		"title": "Date Module 3 (in range)"
	},
	"rel": [
		"item"
	],
	"entities": [
		{
			"properties": {},
			"rel": [
				"item"
			],
			"entities": [],
			"links": [
				{
					"rel": [
						"self",
						"describes"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97652"
				},
				{
					"rel": [
						"up"
					],
					"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
				}
			],
			"class": [
				"sequenced-activity"
			]
		}
	],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97649"
		}
	],
	"class": [
		"sequence",
		"sequence-description"
	]
})
window.D2L.EntityStore.update('https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97652', {
	"properties": {},
	"rel": [
		"item"
	],
	"entities": [],
	"links": [
		{
			"rel": [
				"self",
				"describes"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97652"
		},
		{
			"rel": [
				"up"
			],
			"href": "https://f1bbe417-8c9c-48c0-90b2-75c0cfaceda5.sequences.api.proddev.d2l/6609/activity/97650"
		}
	],
	"class": [
		"sequenced-activity"
	]
})