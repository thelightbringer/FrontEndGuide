# CSS Style Guide

All rules and guidelines in this document apply to css/scss files unless otherwise noted.

> The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

Most sections are broken up into two parts:

1. Overview of all rules with a quick example
2. Each rule called out with examples of do's and don'ts

**Icon Legend**:

`·` Space, `⇥` Tab, `↵` Enter/Return

<!-- ---------------------------------------------------------------------- -->

## Table of Contents

1. [**Files**](#1-files)
1. [File Format](#file-format)
2. [Filename](#filename)
3. [File Structure](#file-structure)
2. [**Skeleton**](#2-skeleton)
3. [**Comments**](#3-comments)
1. [Section Comments](#1-section-comments)
2. [Inline Comments](#2-inline-comments)
4. [**Formatting**](#4-formatting)
1. [Line Indentation](#1-line-indentation)
2. [Blank Lines](#2-blank-lines)
3. [Trailing Whitespace](#3-trailing-whitespace)
4. [Declaration Order](#4-declaration-order)
5. [Property Name Stops](#5-property-name-stops)
6. [Quotation](#6-quotation)
7. [Poperty Units](#7-property-units)
8. [Background Images](#8-background-images)
5. [**Sass**](#5-sass)
1. [Variable Names](#1-variable-names)
2. [Variable Prefix](#2-variable-prefix)
3. [Mixin Names](#3-mixin-names)
4. [Mixin Arguments](#4-mixin-arguments)
5. [Nesting Levels](#5-nesting-levels)
8. [**Best Practices**](#8-best-practices)
1. [Selector Specificity](#1-selector-specificity)
2. [CSS Shorthand](#2-css-shorthand)
3. [CSS Hacks](#3-css-hacks)
4. [CSS3 Properties](#4-css3-properties)
5. [SASS Variables and Mixins](#5-sass-variables-mixins)
6. [Mobile](#6-mobile)

<!-- ---------------------------------------------------------------------- -->

## 1. Files

This section describes the format and naming convention of css and sass files.

#### File Format

1. **Character encoding** MUST be set to UTF-8 without BOM

* Sublime.app &rarr; `File` &#8250; `Save with Encoding` &#8250; `UTF-8`

2. **Line endings** MUST be set to Unix (LF)

* Sublime.app &rarr; `View` &#8250; `Line Endings` &#8250; `Unix`

#### Filename

1. **Letters** MUST be all lowercase

* e.g. `style.css`, `_mobile.scss`

2. **Words** MUST be separated with a hyphen

* e.g. `ie8-styles.css`

3. **Minified** MUST be appended to the filename if the css file is minified

* e.g. `style.min.css`

### File Structure

The following files below are the files that should be created for a new project that utilizes SASS

| Filename             | Description
| -------------------- |:--------------------------------------|
| *_colors.scss*         | Color styles and variables live here |
| *_global.scss*        | Styles that should be applied sitewide live here       |
| *_mobile.scss*        | Styles that are specific to moblie devices live here   |
| *_objects.scss*        | Sitewide variables and mixins should be defined here   |
| *_style.scss*       | Imports all partials and is monitored for changes by sass *(compiled into style.css)* |
| *_typography.scss*     | Font styles and variables live here     |
| *_widgets.scss*        | Reuseable modular styles should live here     |

```

|-- styles/scss/
|   |-- partials/
|   |   |-- _colors.scss
|   |   |-- _global.scss
|   |   |-- _mobile.scss
|   |   |-- _objects.scss
|   |   |-- _typography.scss
|   |   |-- _widgets.scss
|   |-- style.scss
|   |  
|   | 
|-- style.css
```

&#9650; [Table of Contents](#table-of-contents)

<!-- ---------------------------------------------------------------------- -->

## 2. Skeleton

This section showcases a barebones css file with its minimum requirements.

Stylesheet section blocks breakdown:

* **Section 1**: Stylesheet Update Log
* **Section 2**: Line break  
* **Section 3**: Table of Contents
* **Section 4**: Line break
* **Section 4**: Your css rules

<pre lang=css>
/**
 * [Master Stylesheet]
 */

/******************************************************************************/

/**
 * Project: Sample Project Name
 * Version: 1.1
 * Last change: 02/07/14 [fixed Float bug, vf]
 * Assigned to: Your Name (yn), Secondary Name (sn)
 * Primary use: Usage
 */

/******************************************************************************/

/**
 * [Table of Contents]
 * 1. Imports
 * 2. Body
 * 3. Header / #header
 * 4. Navigation / #navbar
 * 5. Content / #content
 * 6. Left column / #leftcolumn
 * 7. Right column / #rightcolumn
 * 8. Sidebar / #sidebar
 * 9. RSS / #rss
 * 10. Search / #search
 * 11. Boxes / .box
 * 12. Sideblog / #sideblog
 * 13. Advertisements / .ads
 * 14. Footer / #footer
 */

/******************************************************************************/

/**
 * [1. Imports]
 */

/******************************************************************************/
@import 'reset.css';
@import 'layout.css';

/**
 * [2. Header]
 */

/******************************************************************************/
body {
 color: #606060;
 font-family: 'Helvetica, Arial, san-serif';
 font-size: 100%;
}
</pre>

&#9650; [Table of Contents](#table-of-contents)

<!-- ---------------------------------------------------------------------- -->

## 3. Comments

1. **Section Comments** MUST be placed on the line above their subject
2. **Inline Comments** MUST use `/* */` delimiters

* e.g. `#navigation{  /*height: 30px;*/  }`

&#9650; [Table of Contents](#table-of-contents)

### 1. Section Comments

Section comments MUST be placed on their own line above the associated section's declarations

#### &#10006; Incorrect

<pre lang=css>
/**
 * [3. Header]
 */

/******************************************************************************/ #nav li{ display: inline; }
</pre>
&#8627; Incorrect because the section comment is not on it's own line.

#### &#10004; Correct

<pre lang=css>
/**
 * [3. Header]
 */

/******************************************************************************/
# nav li{ display: inline; }
</pre>

### 2. Inline Comments

Inline comments MUST use `/* */` delimiters.

#### &#10006; Incorrect

<pre lang=css>
# navigation li {
 color: #404040;
 display: inline-block;
 font-family: 'Proxima-nova, helvetica, sans-serif';
 line-height: inherit; // inherits the line-height from parent element
}
</pre>
&#8627; Incorrect because it uses an invalid `//` for a single-line comment.

#### &#10004; Correct

<pre lang=css>
# navigation li {
 color: #404040;
 display: inline-block;
 font-family: 'Proxima-nova, helvetica, sans-serif';
 line-height: inherit; /*inherits the line-height from parent element*/
}
</pre>

#### &#10006; Incorrect

<pre lang=css>
# navigation li {
 //color: #404040;
 //display: inline-block;
 //font-family: 'Proxima-nova, helvetica, sans-serif';
 //line-height: inherit;
}
</pre>

#### &#10004; Correct

<pre lang=css>
# navigation li {
 /*color: #404040;
 display: inline-block;
 font-family: 'Proxima-nova, helvetica, sans-serif';
 line-height :inherit;*/
}
</pre>

&#9650; [Table of Contents](#table-of-contents)
<!-- ----------------------------------------------------------- -->

## 4. Formatting

This section outline various, general formatting rules related to whitespace and text.

1. [**Line indentation**](#1-line-indentation) MUST be accomplished using tabs

* i.e. `.selector-1 {` `↵` `⇥` `...` `↵` `}`

2. [**Blank lines**](#2-blank-lines) MUST be include between rulesets

* i.e. `.selector-1 {}` `↵` `↵` `.selector-2 {}`

3. [**Trailing whitespace**](#3-trailing-whitespace) MUST NOT be present after ruleset brackets , css declarations, stacked selectors or on blank lines

* i.e. no `...` `·` `·` `↵` `·` `↵` `...`

4. [**Declaration order**](#4-declaration-order) SHOULD be consistantly ordered either logically or alphabetically

* e.g. `background: #000;` `↵` `color: #fff;` `↵` `font-family: 'sans-serif';`

5. [**Property name stops**](#5-property-name-stops) MUST use a space after a property name's colon.

* e.g. `font-weight: 700;`

6. [**Quotation**](#6-quotation) MUST use single quotes.

* e.g. `background: url('images/logo.png') no-repeat 0 0;`

7. [**Property Units**](#7-property-units)

* percentages SHOULD be used to define: width, height, padding and margins
* i.e. `width: 60%;` `height: 100%;` `padding: 0 2%;` `margin-right: 3%;`
* font-sizes SHOULD be defined using em or rems
* i.e. `font-size: 1.8em;` `font-size: 1.9rem;`
* image height and widths SHOULD be defined using percentages
* i.e. `img { width: 65.7%; }`

8. [**Background Images**](#8-background-images) MUST use protocol-relative urls

* e.g. `background-image: url(//bar.com/foo.png);`

&#9650; [Table of Contents](#table-of-contents)

### 1. Line Indentation

Line indentation MUST be accomplished using tabs.

#### &#10006; Incorrect

<pre lang=css>
# footer .awards h3{
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
}
</pre>
&#8627; Incorrect because spaces are used to indent instead of a tab.

#### &#10004; Correct

<pre lang=css>
# footer .awards h3 {
 color: #000;
 font-weight: 600;
 text-transform: capitalize;
}
</pre>

### 2. Blank Lines

A blank line MUST be included between rulesets.

#### &#10006; Incorrect

<pre lang=css>
.selector-1 {
 background: #efefef;
 border-radius: 4px;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 color: #999;
}
.selector-2 {
 display: inline-block;
 text-decoration: none;
}
</pre>
&#8627; Incorrect because there is not a blank line between the closing bracet of the `.selector-1` and the `.selector-2` opening bracket.

#### &#10004; Correct

<pre lang=css>
.selector-1 {
 background: #efefef;
 border-radius: 4px;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 color: #999;
}

.selector-2 {
 display: inline-block;
 text-decoration: none;
}
</pre>

### 3. Trailing whitespace

Trailing whitespace MUST NOT be present after ruleset brackets , css declarations, stacked selectors or on blank lines.

#### &#10006; Incorrect

<pre lang=css>
.selector-1,
.selector-2,
.selector-3 {
 background: #efefef;
 border-radius: 4px;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 color: #999;
}
</pre>
&#8627; Incorrect because there is a space after `,`.

<pre lang=css>
.selector-1,
.selector-2,
.selector-3 {
 background: #efefef;
 border-radius: 4px;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 color: #999;
}
</pre>
&#8627; Incorrect because there is a space after each of the css declarations.

<pre lang=css>
.selector-1,
.selector-2,
.selector-3 {
 background: #efefef;
 border-radius: 4px;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 color: #999;
}
</pre>
&#8627; Incorrect because there is a space after `}`.

#### &#10004; Correct

<pre lang=css>
.selector-1,
.selector-2,
.selector-3 {
 background: #efefef;
 border-radius: 4px;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 color: #999;
}
</pre>

### 4. Declaration Order

Ruleset declarations MUST be consistantly ordered alphabetically.

#### &#10006; Incorrect

<pre lang=css>
.jspscrollable span {
 text-transform: underline;
 font-weight: 700;
 padding: 4px 3px;
 border-radius: 4px;
 height: 100%;
 overflow: hidden;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 line-height: 15;
 border: 1px solid rgba(60, 60, 60, .4);
 width: 75%;
 color: #aaa;
}
</pre>
&#8627; Incorrect because the ruleset declarations are not ordered alphabetically.

#### &#10004; Correct

<pre lang=css>
.jspscrollable span {
 border: 1px solid rgba(60, 60, 60, .4);
 border-radius: 4px;
 -moz-border-radius: 4px;
 -webki-tborder-radius: 4px;
 color: #aaa;
 font-weight: 700;
 height: 100%;
 line-height: 15;
 overflow: hidden;
 padding: 4px 3px;
 text-transform: underline;
 width: 75%;
}
</pre>
&#8627; Correct - this is an alphabetical arrangement.

### 5. Property name stops

Properties must have a space after the colon following the property name

#### &#10006; Incorrect

<pre lang=css>
body {
 height:100%;
 overflow: hidden;
 position: relative;
}
</pre>
&#8627; Incorrect because there is no space between `height:` and `100%`.

#### &#10004; Correct

<pre lang=css>
body {
 height: 100%;
 overflow: hidden;
 position: relative;
}
</pre>

### 6. Quotation

Single quotes should be used in all css declarations

#### &#10006; Incorrect

<pre lang=css>
body {
 height: 100%;
 overflow: hidden;
 position: relative;
 font-family: "Helvetica, Arial, Sans-serif";
 background: url("images/background.png") no-repeat 0 0;
}
</pre>
&#8627; Incorrect because the `background` and `font-family` declarations use double quotes instead of single quotes.

#### &#10004; Correct

<pre lang=css>
body {
 height: 100%;
 overflow: hidden;
 position: relative;
 font-family: 'Helvetica, Arial, Sans-serif';
 background: url('images/background.png') no-repeat 0 0;
}
</pre>

### 7. Property Units

Percentages SHOULD be used to define: width, height, padding and margins

#### &#10006; Incorrect

<pre lang=css>
# content .left-container {
 float: left;
 font-size: 4%;
 height: 100%;
 margin-right: 28px;
 overflow: hidden;
 width: 672px;
}

# content .sidebar {
 float: left;
 font-size: 12px;
 height: 100%;
 margin: 0;
 overflow: hidden;
 width: 307px;
}

# content .sidebar img {
 height: auto;
 max-width: inherit;
 width: 500px;
}
</pre>
&#8627; Incorrect because the widths and margin-right declarations use px instead of %.

&#8627; Incorrect because the font-size(s) are not defined with ems or rems.

&#8627; Incorrect because the `#content .sidebar img {}` isn't using percentages for the width.

#### &#10004; Correct

<pre lang=css>
# content .left-container {
 float: left;
 font-size: 1.8em;
 height: 100%;
 margin-right: 3%;
 overflow: hidden;
 width: 70%;
}

# content .sidebar {
 float: left;
 font-size: 1.75rem;
 height: 100%;
 margin: 0;
 overflow: hidden;
 width: 27%;
}

# content .sidebar img {
 height: auto;
 max-width: inherit;
 width: 72%;
}
</pre>

### 8. Background Images

MUST use protocol-relative urls.

#### &#10006; Incorrect

<pre lang=css>
# footer .awards h3{
    background: url(http://bar.com/foo.png) no-repeat 0 0;
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
}
</pre>
&#8627; Incorrect because a protocol has been specified in `background: url(http://bar.com/foo.png) no-repeat 0 0;`.

#### &#10004; Correct

<pre lang=css>
# footer .awards h3{
    background: url(//bar.com/foo.png) no-repeat 0 0;
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
}
</pre>

&#9650; [Table of Contents](#table-of-contents)

<!-- ----------------------------------------------------------- -->

## 5. SASS

This section outlines basic style guidelines for defining variables with SASS.

1. [**Variable Names**](#1-variable-names) MUST be all lowercase and words MUST be separated by hyphens.

* i.e. `$link-dark-gray: #a9a9a9;`

2. [**Variable Prefix**](#2-variable-prefix) SHOULD be prefixed with element type that variable will be applied to.

* i.e. `$font-weight-bold: 600;`

3. [**Mixin Names**](#3-mixin-names) MUST be lowercase and words separated with underscores
 i.e. `@mixin mixin_border_radius() {}`
4. [**Mixin Arguments**](#4-mixin-arguments)

* MUST NOT have a space before the comma
* MUST have a space after the comma
* MAY use line breaks for long arguments
* MUST then place each argument on its own line
* MUST then indent each argument once
* MUST be ordered from required to optional first
* MUST be ordered from high to low importance second
* MUST use descriptive defaults
* MUST be preceded by a comment that explains the functionality of the mixin
* e.g. `@mixin border-radius($radius-left, $radius-rght, $radius-top = 100);`

5. [**Nesting Levels**](#5-nesting-levels) SHOULD never go more than four levels deep.

&#9650; [Table of Contents](#table-of-contents)

### 1. Variable Names

Variable names MUST be all lowercase and words MUST be separated by hyphens.

#### &#10006; Incorrect

<pre lang=sass>
/*Color Variables*/
$color-dark-gray: #a9a9a9;
$color-black: #000;
$colorLightBlue: #add8e6;
$color-Kiwi: #7f9a65;
$color_ruby_red: #c82536;
</pre>
&#8627; Incorrect because `$colorlightBlue` is not seperated with hyphens. Variables should not be camelcase.

&#8627; Incorrect because `$color-Kiwi` is not all lowercase.

&#8627; Incorrect because `$color_ruby_red` is separated by underscores.

#### &#10004; Correct

<pre lang=sass>
/*Color Variables*/
$color-dark-gray: #a9a9a9;
$color-black: #000;
$color-light-blue: #add8e6;
$color-kiwi: #7f9a65;
$color-ruby-red: #c82536;
</pre>

### 2. Variable Prefix

Variables SHOULD be prefixed with the element type that the variable will be applied to.

#### ~ Acceptable

<pre lang=sass>
/*Define Variables*/
$dark-gray: #a9a9a9;
$line-height: 16;
$color-blue: #add8e6;
</pre>

&#8627; Acceptable, as some variables may be applied to several types of elements. This makes it difficult to assign an appropriate prefix to the variable.

#### &#10004; Preferred

<pre lang=sass>
/*Define Variables*/
$font-color-dark-gray: #a9a9a9;
$slideshow-caption-line-height: 16;
$logo-color-blue: #add8e6;
</pre>

&#8627; Preferred. Try to make variable names as consise, descriptive and semantic as possible.

### 3. Mixin Names

Mixin Names MUST be lowercase and words seperated with underscores.

#### &#10006; Incorrect

<pre lang=sass>
@mixin myMixinName($opacity: .5) {
 opacity: $opacity;
 -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity =' $opacity *100 ')';
filter: alpha(opacity = $opacity* 100 );
 zoom: 1;
}
</pre>
&#8627; Incorrect because `@mixin myMixinName() {}` is not all lowercase.

&#8627; Incorrect because the words in `@mixin myMixinName() {}` are not separated with underscores.

#### &#10004; Correct

<pre lang=sass>
@mixin my_mixin_name($opacity: .5) {
 opacity: $opacity;
 -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity =' $opacity *100 ')';
filter: alpha(opacity = $opacity* 100 );
 zoom: 1;
}
</pre>

### 4. Mixin Arguments

Mixin Arguments

* MUST NOT have a space before the comma
* MUST have a space after the comma
* MAY use line breaks for long arguments
* MUST then place each argument on its own line
* MUST then indent each argument once
* MUST be ordered from required to optional first
* MUST be ordered from high to low importance second
* MUST use descriptive defaults
* MUST be preceded by a comment that explains the functionality of the mixin

#### &#10006; Incorrect

<pre lang=sass>
/*Round Borders
 1. 'size' sets the width of the border-outline in px
 2. 'type' sets the type of the border (solid)
 3. radius* is the radius in px for the border in every corner of the element - if there's only one radius, every radius gets the amount of the first one */

@mixin mixin_border_radius($size: none, $type: none, $color: none, $radius1: 999, $radius2: 999, $radius3: 999, $radius4: 999) {

 @if $radius2 == 999 {$radius2 : $radius1};
 @if $radius3 == 999 {$radius3 : $radius1};
 @if $radius4 == 999 {$radius4 : $radius1};

 @if $size != none {border: $size $type $color};

 -webkit-border-radius : $radius1 $radius2 $radius3 $radius4;
 -moz-border-radius    : $radius1 $radius2 $radius3 $radius4;
 border-radius       : $radius1 $radius2 $radius3 $radius4;
}
</pre>
&#8627; Incorrect because long list of arguments are not broken up one per line.

&#8627; Incorrect mixin arguments should be more descriptive e.g. `$radius1, $radius2`. While you could derive what each variable is doing, this could be made more obvious with descriptive names.

#### &#10004; Correct

<pre lang=sass>
/*Round Borders
 1. 'size' sets the width of the border-outline in px
 2. 'type' sets the type of the border (solid)
 3. radius* is the radius in px for the border in every corner of the element - if there's only one radius, every radius gets the amount of the first one */

@mixin mixin_border_radius(
 $border-size: none,
 $border-type: none,
 $border-color: none,
 $border-top-left-radius: 999,
 $border-top-right-radius: 999,
 $border-bottom-left-radius: 999,
 border-bottom-right-radius: 999
) {

 @if $border-top-left-radius == 999 {$border-top-left-radius : $border-top-right-radius};
 @if $border-bottom-left-radius == 999 {$border-bottom-left-radius : $border-top-right-radius};
 @if $border-bottom-right-radius == 999 {$border-bottom-right-radius : $border-top-right-radius};

 @if $size != none {border: $size $type $color};

 -webkit-border-radius : border-top-left-radiius $border-top-right-radius $border-bottom-right-radius $border-bottom-left-radius;
 -moz-border-radius    : border-top-left-radiius $border-top-right-radius $border-bottom-right-radius $border-bottom-left-radius;
 border-radius       : border-top-left-radiius $border-top-right-radius $border-bottom-right-radius $border-bottom-left-radius;
}
</pre>

### 5. Nesting Levels

#### &#10006; Incorrect

<pre lang=sass>
.blog-post {
 background: transparent;
 color: #606060;
 display: inline-block;
 .blog-post-content {
  color: #000;
  font-weight: normal;
  .blog-post-meta {
   display: block;
   float: right;
   .blog-post-meta-author {
    color: blue;
    .blog-post-author-link {
     text-decoration: underline;
    }
   }
  }
 }
}
</pre>
&#8627; Incorrect as the nesting above goes more than four levels deep.

#### &#10004; Correct

<pre lang=sass>
.blog-post {
 background: transparent;
 color: #606060;
 display: inline-block;
 .blog-post-content {
  color: #000;
  font-weight: normal;
  .blog-post-meta {
   display: block;
   float: right;
   .blog-post-meta-author {
    color: blue;
   }
  }
 }
}

.blog-post-author-link {
 text-decoration: underline;
}
</pre>

&#9650; [Table of Contents](#table-of-contents)

<!-- ----------------------------------------------------------- -->

## 8. Best Practices

1. [**Selector Specificity**](#1-selector-specificity)

* SHOULD be efficient and consise.
* Elements that occur once in the page SHOULD use an ID, otherwise use classes.
* SHOULD not use more than one id selector in a rule declaration.
* SHOULD use specific and descriptive classnames and reflect the purpose of the element in question.

2. [**CSS Shorthand**](#2-css-shorthand) SHOULD use shorthand properties when possible.

* e.g. `padding: 0 4px;`

3. [**CSS Hacks**](#3-css-hacks) SHOULD avoid using css hacks.

* Usage of inline IE version hacks SHOULD be avoided. A version specific stylesheet should be conditionally loaded instead.
* MUST avoid using `!important`. Selector specificity increased for the affected rule instead.
* SHOULD avoid firfox,chrome,safari and opera targetting hacks. Hacks used to target firefox, Chrome, Safari and Opera browsers may be used sparingly, as there are instances where rendering in these browsers may need to be slightly different. It is preferrable to use a js library that adds a browser specific class to the body tag of a html layout. That new class could then be used for your styling purposes.
* e.g. NO `#slider { color: blue\9; }` `#slider { width: 100%!important; }`

4. [**CSS3 Properties**](#4-css3-properties) MUST include vendor prefixes for css3 properties **if needed**.

* e.g. `border-radius: 3px;` `↵` `-webkit-border-radius: 3px;` `↵` `-moz-border-radius: 3px;`

5. [**SASS Variables and Mixins**](#5-sass-variables-mixins)

* SHOULD use variables to store singular values that will be reused frequently within the stylesheet. Colors, fonts, font-sizes, widths, margin and paddings could all be stored as variables.
* e.g. `$nav-link-color: #555;` `$default-font-family: 'Proxima-nova, Helvetica, Sans-serif';`
* SHOULD use mixins in place of repetitive blocks of declarations. Any css3 declarations that require vendor prefixis could be combined into a mixin, groupings of declarations for an element could also be combined into a mixin.
* e.g. `@mixin border-radius($radius) {` `↵` `⇥` `-moz-border-radius: $radius;` `↵` `-webkit-border-radius: $radius;` `↵` `border-radius: $radius;` `}`

6. [**Mobile**](#6-mobile)

* SHOULD Use fluid grids where percentages are utilized for widths, heights, margins and paddings. A mobile-first css framework will automatically work within these principals.
* i.e. `.col-md-12 { width: 100%;}` `↵` `.col-md-6 { width: 50%; }` *(example is from bootstrap)*
* SHOULD Use either EMs or REMs for font-sizes.
* e.g. `.blog-post .content { font-size: 1.44rem; }`
* SHOULD Use percentages for image sizes.
* e.g. `.author img { max-width: 75%; }`

&#9650; [Table of Contents](#table-of-contents)

### 1. Selector Specificity

* SHOULD be efficient and consise.
* Elements that occur once in the page SHOULD use an ID, otherwise use classes.
* SHOULD not use more than one id selector in a rule declaration.
* SHOULD use specific and descriptive classnames and reflect the purpose of the element in question.

#### &#10006; Incorrect

<pre lang=css>
.color {
 background: #000;
}
</pre>
&#8627; Incorrect as `.color` selector doesn't clearly indicate what it will be used for.

#### &#10006; Incorrect

<pre lang=css>
.this-is-going-to-be-used .to-set-the-color-to-black {
 background: #000;
}
# navigation #subnav li a {
 display: inline-block;
}
</pre>
&#8627; Incorrect as the selectors while clear, could be rewritten to be more consise.

&#8627; Two ids should not be used in a selector *Unless* absolutely neccessary as this can prove to be nearly as problematic as having `!important;`.

#### &#10004; Correct

<pre lang=css>
# footer .contact-form-submit {
 float: left;
}
</pre>

### 2. CSS Shorthand

#### &#10006; Incorrect

<pre lang=css>
.#footer .contact-form-submit {
 margin-left: 3px;
 margin-right: 3px;
 margin-top: 4px;
 margin-bottom: 5px;
}
</pre>
&#8627; Incorrect as these declarations could be simplified into a single declaration.

#### &#10004; Correct

<pre lang=css>
# footer .contact-form-submit {
 margin: 4px 3px 5px 3px;
}
</pre>

### 3. CSS Hacks

* Usage of inline IE version hacks SHOULD be avoided. A version specific stylesheet should be conditionally loaded instead.
* Usage of `!important` MUST be avoided. Selector specificity increased for the affected rule instead.
* Hacks used to target firefox, Chrome, Safari and Opera browsers may be used sparingly, as there are instances where rendering in these browsers may need to be slightly different. It is preferrable to use a js library that adds a browser specific class to the body tag of a html layout. That new class could then be used for your styling purposes.

#### ~ Acceptable

<pre lang=css>
# header .logo {
 position: relative; /*Position relative for modern browsers*/
 position: absolute\9; /*Position absolute for IE8 and IE7*/
}
</pre>
&#8627; Acceptable but not the preferred method.

#### &#10004; Correct

<pre lang=css>
# header .logo {
 position: relative;
}

.ie7 #header .logo,
.ie8 #header .logo {
 position: absolute;
}
</pre>
&#8627; The preferred method would be either to create a stylesheet that is conditionally loaded for IE7 & IE8 or to use js detection that will add classes such as `ie7`, that could then be used for styling purposes.

### 4. CSS3 Properties

The table below details some css3 properties that MUST be vendor prefixed .

| MUST have vendor prefixes   | Vendor prefixes recommended
| -------------------- |:--------------------------------------|
| <a href="http://caniuse.com/animations"> animation</a>      | <a href="http://caniuse.com/border-radius"> border-radius</a> |
| <a href="http://caniuse.com/border-image"> border-image</a>       | <a href="http://caniuse.com/box-shadow"> box-shadow</a> |
| <a href="http://caniuse.com/box-sizing"> box-sizing</a>
| <a href="http://caniuse.com/calc"> calc</a>       |   |
| <a href="http://caniuse.com/#feat=css-filters"> filters</a>       | |
| <a href="http://caniuse.com/flexbox"> flexbox</a>     |     |
| <a href="http://caniuse.com/graidients"> gradients</a>       |     |
| <a href="http://caniuse.com/masks"> masks</a>       |     |
| <a href="http://caniuse.com/regions"> regions</a>       |    |
| <a href="http://caniuse.com/text-overflow"> text-overflow</a>       |      |
| <a href="http://caniuse.com/transforms"> transforms</a>       |     |
| <a href="http://caniuse.com/transitions"> transitions</a>       |    |

#### ~ Acceptable

<pre lang=css>
.#footer .contact-form-submit {
 border-radius: 3px;
 box-shadow: 0 -3px 12px rgba(0, 0, 0, .4);
 -moz-box-shadow: 0 -3px 12px rgba(0, 0, 0, .4);
 -webkit-box-shadow: 0 -3px 12px rgba(0, 0, 0, .4);
}
</pre>
&#8627; Acceptable. The current versions of all popular browsers do not require prefixes for `box-shadow` or `border-radius`. It is possible that some users may still be running versions of these browsers that are a few versions behind the current version. These older versions would not recognize the `border-radius` and `box-shadow` declarations without the vendor prefixes.

#### &#10004; Preferred

<pre lang=css>
.#footer .contact-form-submit {
 border-radius: 3px;
 -moz-border-radius: 3px;
 -webkit-border-radius: 3px;
 box-shadow: 0 -3px 12px rgba(0, 0, 0, .4);
 -moz-box-shadow: 0 -3px 12px rgba(0, 0, 0, .4);
 -webkit-box-shadow: 0 -3px 12px rgba(0, 0, 0, .4);
}
</pre>

#### &#10006; Incorrect

<pre lang=css>
.#footer .column {
 box-sizing: border-box;
 padding: 0 2.2%;
}
</pre>
&#8627; Incorrect, no vendor prefixes have been specified for `box-sizing: border-box;`.

#### &#10004; Correct

<pre lang=css>
.#footer .column {
 box-sizing: border-box;
 -moz-box-sizing: border-box;
 -webkit-box-sizing: border-box;
 padding: 0 2.2%;
}
</pre>

### 5. SASS Variables and Mixins

* SASS variables SHOULD be used to store singular values that will be reused frequently within the stylesheet. Colors, fonts, font-sizes, widths, margin and paddings could all be stored as variables.

* SASS mixins SHOULD be used in place of repetitive blocks of declarations. Any css3 declarations that require vendor prefixis could be combined into a mixin, groupings of declarations for an element could also be combined into a mixin.

#### ~ Acceptable

<pre lang=sass>
body {
 color: #000;
 font-family: 'Proxima-nova, Helvetica, Sans-serif';
 font-size:14px;
}

# widget .container {
 box-shadow: inset 3px 1px 6px rgba(60, 60, 60, .75);
 -moz-box-shadow: inset 3px 1px 6px rgba(60, 60, 60, .75);
 -webkit-box-shadow: inset 3px 1px 6px rgba(60, 60, 60, .75);
}
</pre>
&#8627; This is valid syntax as variables, but there is also an opportunity for storing these values as variables as there is a good chance they will need to be reused within the stylesheet at somepoint. Changing this value in one location is normally preferrable over having to modify it in several places.

#### &#10004; Preferred

<pre lang=sass>
/*Variables and mixin below were defined within a separate stylesheet*/
body {
 color: $color-black;
 font-family: $proxima-nova-regular;
 font-size: $default-font-size;
}

# widget .container {
 @include box-shadow(3px, 1px, 6px, rgba(60, 60, 60, .75), true);

}
</pre>

### 6. Mobile

* SHOULD Use fluid grids where percentages are utilized for widths, heights, margins and paddings. A mobile-first css framework will automatically work off these principals.
* SHOULD Use either EMs or REMs for font-sizes.
* SHOULD Use percentages for image sizes.

### 6. Mobile

#### &#10006; Incorrect

<pre lang=sass>
.blog-post .content {
 font-family: $proxima-nova-regular;
 font-size: 12px;
}
.author-box img{
 vertical-align: middle;
 max-width: 320px;
}
</pre>
&#8627; Incorrect as `font-size: 12px;` SHOULD utilize em or rem instead. `max-width:320px;` should be defined with a percentage.

#### &#10004; Correct

<pre lang=sass>
.blog-post .content {
 font-family: $proxima-nova-regular;
 font-size: .750em;
}
.author-box img{
 vertical-align: middle;
 max-width: 33.3%;
}
</pre>

&#9650; [Table of Contents](#table-of-contents)

Inspired in part by code standards from:<br />
[idiomatic.css](https://github.com/necolas/idiomatic-css),[Google Style Guide](http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml).
<!-- ----------------------------------------------------------- -->
