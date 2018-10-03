<template>
  <div>
    <h1>Boostrap</h1>
    <p>This boilerplate comes out of the box with bootstrap.</p>
    <p>The application has been set up so its easy to start
    customing bootstrap to fit your needs.</p>

    <pre class="pre-scrollable">
      <code>
  src/assets
  └── scss
      ├── _colors.scss
      ├── _custom.scss
      ├── _fonts.scss
      ├── _type.scss
      ├── bootstrap.scss
      ├── globals.scss
      ├── icons.scss
      └── main.scss</code>
    </pre>

    <b>_color.scss</b>
    <p>This is where yo should define all our color variables</p>
    <b>_custom.scss</b>
    <p>This is the file to override standard bootstrap variables</p>
    <b>_fonts.scss</b>
    <p>If you projcet requires custom fonts you can define them here</p>
    <b>_type.scss</b>
    <p>This file is for defining global styling for all
    your type elements, such as
    <code>&lt;h1&gt;, &lt;h2&gt;, &lt;p&gt;</code> etc..</p>
    <b>bootstrap.scss</b>
    <p>This file is where we select which boostrap components
    we want to include in our project. If your bootstrap
    components look wierd, check this file and make sure
    you included all the nessesary components</p>
    <b>globals.scss</b>
    <p>This file colects all the scss that needs to be available
    across all components without having to import the styles
    directly in the component.
    This is configured in the <code>vue.config.js</code> file</p>
    <b>icons.scss</b>
    <p>The icons file in this project setup and includes
    material icons. This is where to customize if you need
    aditional or other icon packs</p>
    <b>main.scss</b>
    <p>This is the file that collects all the files
    and gets included into the <code>src/main.js</code> file</p>
  </div>
</template>
