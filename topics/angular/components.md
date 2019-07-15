---
layout: topic-page
topic: angular
permalink: /angular/components
title: Components
summary: Angular components
---


## Metadata
The @Component decorator identifies the class immediately below it as an Angular component class.
```javascript
@Component({
  selector:    'app-hero-list',
    templateUrl: './hero-list.component.html',
    providers:  [ HeroService ]
  })
  export class HeroListComponent implements OnInit {
  /* . . . */
}
```

* selector - CSS selector that tells Angular to create instance of this component wherever finds this in template HTML
* templateUrl - path to the HTML template file (can also provide HTML template inline using "template" property)
* providers - array of providers for services that the component requires
