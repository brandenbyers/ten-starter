# TENS

---

## Markdown Cheatsheet

### Markdown Abbreviations

**EXAMPLE:**

```
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```

**RESULT:**

```
<p>The <abbr title="Hyper Text Markup Language">HTML</abbr> specification
is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.</p>
```

### Markdown Container


**EXAMPLE:**

```
::: warning
*here be dragons*
:::
```

**RESULT:**

```
<div class="warning">
<em>here be dragons</em>
</div>
```

### Markdown Mark

```
md.render('==marked==') // => '<p><mark>marked</mark></p>'
```

---
