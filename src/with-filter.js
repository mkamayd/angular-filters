'use strict';
/*
//given products = [{p1:'l1', p2:'s1'}, {p1:'s2', p2:'l2'}]
search = 'l'
<div ng-repeat="product in products | filter:search"> 
result [{p1:'l1', p2:'s1'}, {p1:'s2', p2:'l2'}]
notes: it looks in every property of the object and if there is a match will take that element, sometimes you might want to exclude properties like 'id'.

<div ng-repeat="product in products | filter:{ p1:search}">
result [{p1:'l1', p2:'s1'}]
note: only looks for the property p1 to match.

<div ng-repeat="product in products | filter:{ p1:search, p2:search}">
result []
note: it must match p1 AND p2 to take that element.

<div ng-repeat="product in products | with:search:['p1','p2']"> 
result [{p1:'l1', p2:'s1'}, {p1:'s2', p2:'l2'}]
note: it can match p1 OR p2 to take that element.


Use the with filter if you need to match in at least one property from a list but need to ignore the others.

*/
angular.module('app').filter('with', function () {
    return function (collection, text, properties) {
        var properties = properties || [];
        var res = [], i,j, filter = (text || '').trim().replace(/[^a-zA-Z 0-9]+/g,''), element, prop;
        if (!filter) {
            return collection;
        }
        for (i = 0; i < collection.length; i++) {
            element = collection[i];
            if (element) {
                for (j = 0; j < properties.length; j++) {
                    prop = element[properties[j]]+'';
                    if (prop) {
                        if (prop.match(new RegExp(filter, 'i'))) {
                            res.push(element);
                            break;
                        }
                    }
                }
            }
        }
        
        return res;
    };
});