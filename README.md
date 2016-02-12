# angular-filters
Some angular filters to make development easier.

## with-filter
If you are having a collection sometimes you will need to filter elements that are having a matching value for at least one property but you need to exclude some others properties. Introducing `with` filter.

```html
<div ng-repeat="product in products | with:searchKey:['p1','p2']"> 
```

