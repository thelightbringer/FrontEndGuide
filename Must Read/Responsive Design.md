# Responsive Images

- Meta tag - ``` <meta name="viewport" content="width=device-width, initial-scale=1.0">```
- width property is set to 100%, the image will be responsive and scale up and down
- max-width property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size.
- Picture element
  ```
    <picture>
      <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
      <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
      <source srcset="flowers.jpg">
      <img src="img_smallflower.jpg" alt="Flowers">
    </picture>
   ```
- Responsive text size - The text size can be set with a "vw" unit, which means the "viewport width".
- Media queries
  ```
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {...}

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {...}

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {...}

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {...}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {...}
  ```
-
