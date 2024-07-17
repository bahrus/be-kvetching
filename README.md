# be-kvetching (😤)

*be-kvetching* turns the tag it adorns into a web component that inherits from [k-fetch](https://github.com/bahrus/k-fetch).

```html
<medical-prescriptions zero=name
    enh-be-kvetching 
    onerror
    href="https://my-website.com/prescriptions/patient/zero">
<medical-prescriptions>


...
<medical-prescriptions name=one
>
</medical-prescriptions>
```

## Using a custom web component to extend. [Untested]

The *k-fetch* web component is a fairly non-opinionated web component.  But often times any particular app will want to make particular choices as far as how to define the base url for all the fetch requests, credentials, JWT headers, etc.  k-fetch provides [many small methods](https://github.com/bahrus/k-fetch/blob/baseline/k-fetch.ts) that can be overridden to allow this to be customized according to such needs.

Such app's can define their own web component, most likely extending k-fetch.

be-kvetching can be instructed to use this custom web component definition, instead of the default k-fetch, via two alternate ways (or combine as needs warrant):

### Approach 1 (DRY)

Somewhere in the document (probably ideally within the head tag at the top), add a "link" tag (or any other tag really) with id be-kvetching, and attribute data-inherits.  For example:

```html
<html>
    <head>
        <link rel=modulepreload id=be-kvetching data-inherits=my-custom-base-fetch-element href=https://myapp.com/resources/be-kvetching.js >
    </head>
</html>
```

### Approach 2 (Highly customizable)

specify the custom element name to inherit from within the adorned tag itself:


```html
<medical-prescriptions zero=name
    enh-be-kvetching 
    inherits=my-custom-base-fetch-element
    onerror
    href="https://my-website.com/prescriptions/patient/zero">
<medical-prescriptions>
```