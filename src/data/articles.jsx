export const articles = [
  {
    id: 1,
    title: 'Prueba de Hipótesis',
    excerpt: 'Definición, tipos, procedimientos a seguir para su planteamiento y formas de estimar.',
    image: 'https://images.unsplash.com/photo-1543386650-2be9a18d2750?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: [
      {type: 'text', value: 'Las pruebas de hipótesis son un enfoque sistemático para evaluar afirmaciones o suposiciones sobre una población. En esencia, implican comparar dos hipótesis: la hipótesis nula (H0) y la hipótesis alternativa (H1). La hipótesis nula es una afirmación que generalmente refleja la «situación estándar» o la falta de un efecto. La hipótesis alternativa, por otro lado, es la afirmación que estamos tratando de probar.'},

      {type: 'text', value: 'En una prueba de hipótesis, el objetivo es determinar si los datos recopilados de una muestra son suficientemente diferentes de lo que se esperaría bajo la hipótesis nula. Esto implica calcular una estadística de prueba y determinar su probabilidad de ocurrencia bajo la hipótesis nula.'},

      {type: 'heading', value: 'Tipos de hipótesis'},

      {type: 'text', value: 'En las pruebas de hipótesis, existen dos tipos principales de hipótesis que se analizan:'},

      {type: 'text', value: '- Hipótesis Nula (H₀): Es la hipótesis que se asume inicialmente, y generalmente plantea que no hay un efecto significativo o que los parámetros poblacionales no son diferentes de un valor específico. Es lo que se intenta rechazar o probar con la prueba de hipótesis.'},

      {type: 'text', value: '- Hipótesis Alternativa (H₁ o Ha): Es la hipótesis contraria a la nula, que sugiere que hay un efecto o diferencia significativa en la población. Si los datos indican que la hipótesis nula no es probable, entonces se acepta la hipótesis alternativa.'},

      {type: 'heading', value: 'Ejemplo de pruebas de hipótesis'},

      {type: 'text', value: 'Supongamos que Ana trabaja en una fábrica de galletas y es responsable de asegurarse de que las galletas se produzcan con un peso promedio de 20 gramos. Sin embargo, ella ha notado que algunas galletas parecen más pesadas de lo que deberían. Para investigar este problema, ella decide llevar a cabo una prueba de hipótesis.'},
      {type: 'heading', value: 'Procedimiento para realizar una prueba de hipótesis'},

      {type: 'heading2', value: 'Paso 1: Formulación de Hipótesis'},

      {type: 'text', value: '- Hipótesis Nula (H0): La media de peso de las galletas es igual a 20 gramos (μ = 20 gramos).'},

      {type: 'text', value: '- Hipótesis Alternativa (H1): La media de peso de las galletas es diferente de 20 gramos (μ ≠ 20 gramos).'},

      {type: 'heading2', value: 'Paso 2: Recopilación de datos'},

      {type: 'text', value: 'Se reune una muestra aleatoria de 30 galletas y se registran sus pesos. Luego, se calcula la media muestral, que resulta ser de 20.5 gramos, y la desviación estándar muestral, que es de 1.2 gramos.'},

      {type: 'heading2', value: 'Paso 3: Elección de un nivel de significación'},

      {type: 'text', value: 'El nivel de significación (alfa, α) es la probabilidad de cometer un error de Tipo I, que implica rechazar incorrectamente la hipótesis nula cuando es verdadera. Un valor común para α es 0.05, lo que significa que estamos dispuestos a aceptar un 5% de probabilidad de cometer un error de Tipo I.'},

      {type: 'heading2', value: 'Paso 4: Cálculo de la estadística de prueba'},

      {type: 'text', value: 'Para calcular la estadística de prueba, utilizamos la fórmula de la prueba t de Student:'},

      { type: 'image', value: 'https://i.imgur.com/g5eYBQq.png' },

      {type: 'text', value: 'Donde:'},

      {type: 'text', value: '- t es el valor de la Distribución t.'},

      {type: 'text', value: '- x es la media de la muestra (20.5 gramos).'},

      {type: 'text', value: '- μ es la media poblacional (20 gramos).'},

      {type: 'text', value: '- s es la desviación estándar de la muestra (1.2 gramos).'},

      {type: 'text', value: '- n es el tamaño de la muestra (30 galletas).'},

      {type: 'text', value: 'Sustituyendo los valores en la fórmula, obtenemos que t = 2.13.'},

      {type: 'heading2', value: 'Paso 5: Cálculo del Valor Crítico y P-Valor'},

      {type: 'text', value: 'El valor crítico es el punto de corte que separa la región de rechazo de la región de no rechazo. En este caso, como estamos realizando una prueba bilateral (μ ≠ 20 gramos), necesitamos buscar los valores críticos en la tabla de la distribución t de Student para un nivel de significación de 0.05 y 29 grados de libertad (30-1). Encontramos que tα/2​ es aproximadamente ±2.045.'},

      {type: 'text', value: 'El p-valor es la probabilidad de observar una estadística de prueba al menos tan extrema como la calculada bajo la hipótesis nula. Para una prueba bilateral, calculamos el p-valor como el doble del área en la cola de la distribución:'},

      {type: 'text', value: 'p − valor = 2 × P(T > ∣t∣ ).'},

      {type: 'text', value: 'Donde T es una variable aleatoria t con 29 grados de libertad. Utilizamos la calculadora estadística o software para encontrar el p-valor asociado a t=2.13, que resulta ser aproximadamente 0.041.'},

      {type: 'heading2', value: 'Paso 6: Toma de decisión'},

      {type: 'text', value: '- Si ∣t∣ > tα/2​: Rechazamos la hipótesis nula.'},

      {type: 'text', value: '- Si ∣t∣ ≤ tα/2​: No rechazamos la hipótesis nula.'},

      {type: 'text', value: 'En nuestro ejemplo, ∣2.13∣ > 2.045, por lo que rechazamos la hipótesis nula. Esto significa que hay evidencia suficiente para concluir que el peso promedio de las galletas es diferente de 20 gramos.'},

      {type: 'heading2', value: 'Paso 7: Concluir'},

      {type: 'text', value: 'Basándonos en los resultados de la prueba de hipótesis, podemos concluir que las galletas no tienen un peso promedio de 20 gramos, lo que sugiere que podría haber un problema en el proceso de producción que necesita ser investigado y corregido.'},

      {type: 'heading', value: 'Formas de estimar en una prueba de hipótesis'},

      {type: 'heading2', value: 'Estimación por intervalos de confianza'},

      {type: 'text', value: 'Un intervalo de confianza proporciona un rango de valores dentro del cual se espera que se encuentre el parámetro de la población con un cierto nivel de confianza (por ejemplo, el 95%). Si el valor hipotético de la hipótesis nula no cae dentro de este intervalo, se rechaza la hipótesis nula.'},

      {type: 'heading2', value: 'Estimación Punto'},

      {type: 'text', value: 'La estimación punto es un valor específico obtenido de los datos de la muestra (por ejemplo, la media muestral) que se usa para estimar un parámetro poblacional.'},

      {type: 'heading2', value: 'Ejemplo práctico'},

      {type: 'text', value: 'Supongamos que se tiene una muestra de 30 bombillas de una fábrica, y después de medir su vida útil, encntramos que la media es de 980 horas, con una desviación estándar de 40 horas. Si la fábrica asegura que la vida útil promedio es de 1,000 horas, se podría realizar una prueba de hipótesis para verificar esta afirmación.'},

      {type: 'text', value: '1. Hipótesis: '},

      {type: 'text', value: '- H₀: La media de vida útil es 1,000 horas.'},

      {type: 'text', value: '- H₁: La media de vida útil no es 1,000 horas.'},

      {type: 'text', value: '2. Nivel de significancia: α = 0.05.'},

      {type: 'text', value: '3. Prueba estadística: Utilizando una prueba t (ya que se desconoce la varianza poblacional y la muestra es pequeña).'},

      {type: 'text', value: '4. Cálculo de la estadística t: Utilizando la fórmula de la prueba t, se obtiene un valor t.'},

      {type: 'text', value: '5. Valor p: Calculamos el valor p correspondiente y lo comparamos con α.'},

      {type: 'text', value: '6. Decisión: Si el valor p es menor que 0.05, rechazamos la hipótesis nula y concluimos que la vida útil no es de 1,000 horas.'},

      {type: 'heading', value: 'Errores en la prueba de hipótesis'},

      {type: 'text', value: 'Es importante tener en cuenta que las pruebas de hipótesis no son infalibles, y existen dos tipos de errores posibles:'},

      {type: 'text', value: '- Error Tipo I (α): Se rechaza la hipótesis nula cuando es verdadera. Este error se controla ajustando el nivel de significancia.'},

      {type: 'text', value: '- Error Tipo II (β): No se rechaza la hipótesis nula cuando es falsa. Este error se puede reducir aumentando el tamaño de la muestra o el nivel de significancia.'},

      {type: 'heading', value: 'Pruebas de Hipótesis para la Media y para la Proporción'},

      {type: 'heading2', value: 'Pruebas de hipótesis para la media'},

      {type: 'text', value: ' Se utilizan cuando el parámetro de interés es la media de una población. En este caso, estábamos probando si la media de la vida útil de las bombillas era igual a 1,000 horas.'},

      {type: 'heading2', value: 'Pruebas de hipótesis para la proporción'},

      {type: 'text', value: 'Se utilizan cuando el parámetro de interés es una proporción de la población. Por ejemplo, si se quisiera probar si el 60% de las bombillas de la fábrica superan las 1,000 horas de vida útil, se realizaría una prueba de hipótesis para una proporción.'},

      {type: 'heading', value: 'Pruebas de Hipótesis para la Media y para la Proporción'},

      {type: 'text', value: '1. Hipótesis Nula (H₀): p=p0 (donde p0 es la proporción esperada).'},

      {type: 'text', value: '2. Hipótesis Alternativa (H₁): p=p0.'},

      {type: 'text', value: '3. Se calculan los estadísticos correspondientes y se comparan con los valores críticos.'},

      {type: 'text', value: 'La prueba de hipótesis es una herramienta esencial en estadística, utilizada para hacer afirmaciones sobre una población basándose en datos muestrales. Siguiendo un procedimiento claro y estructurado, es posible tomar decisiones informadas y, si es necesario, rechazar o aceptar hipótesis sobre parámetros poblacionales. Para realizar una prueba de hipótesis de manera efectiva, es clave seleccionar la prueba estadística adecuada, interpretar correctamente los resultados y entender los posibles errores involucrados en el proceso.'},

      {type: 'heading', value: 'Fórmulas de estimación'},

      {type: 'heading2', value: 'Para la media'},

      { type: 'image', value: 'https://imgur.com/rGlapyU.png' },

      {type: 'heading2', value: 'Para la proporción'},

      { type: 'image', value: 'https://imgur.com/8hJEycU.png' },

      {type: 'text', value: 'Donde:'},

      {type: 'text', value: '- p^: es la proporción muestral.'},

      {type: 'text', value: '- p0: es la proporción bajo la hipótesis nula.'},

      {type: 'text', value: 'La prueba de hipótesis es una herramienta poderosa para tomar decisiones informadas a partir de datos muestrales. A través del ejemplo de las bombillas, hemos visto cómo formular hipótesis, elegir la prueba adecuada, calcular los valores necesarios y tomar una decisión sobre si los datos apoyan o no la afirmación original de la fábrica. Este tipo de análisis es crucial en muchos campos, como el control de calidad en fábricas, estudios médicos, investigaciones científicas, y más.'},

      {type: 'heading2', value: 'Referencias'},

      {type: 'text', value: '1. https://elmundodelosdatos.com/pruebas-de-hipotesis-teoria-y-ejemplos-practicos/'},

      {type: 'text', value: '2. https://support.minitab.com/es-mx/minitab/help-and-how-to/statistics/basic-statistics/supporting-topics/basics/what-is-a-hypothesis-test/'},
      
    ],
    date: '10-01-2025'
  },
  {
    id: 2,
    title: 'Confiabilidad',
    excerpt: 'Definición, cuando se aplica, métodos empleados, rangos establecidos.',
    image: 'https://plus.unsplash.com/premium_photo-1676750395664-3ac0783ae2c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: [
      {type: 'text', value: 'La confiabilidad se refiere a la consistencia o estabilidad de los resultados de una prueba, medición o evaluación a lo largo del tiempo o entre diferentes evaluadores. En otras palabras, si un instrumento o prueba es confiable, significa que produce resultados consistentes y reproducibles bajo condiciones similares.'},

      {type: 'heading', value: '¿Cuándo se aplica la confiabilidad?'},

      {type: 'text', value: 'La confiabilidad es esencial en cualquier tipo de medición o prueba. Se aplica cuando:'},

      {type: 'text', value: '- Se quiere verificar la precisión de un instrumento de medición.'},

      {type: 'text', value: '- Se desea evaluar la consistencia de los resultados obtenidos de una muestra.'},

      {type: 'text', value: '- Es necesario confirmar la estabilidad de los resultados a lo largo del tiempo, como en pruebas repetidas.'},

      {type: 'text', value: 'Por ejemplo, si un investigador utiliza un termómetro para medir la temperatura de un conjunto de bombillas varias veces y obtiene resultados muy similares en cada medición, podemos decir que el termómetro es confiable.'},

      {type: 'text', value: 'Por otra parte, si se midiera la temperatura y éste indicara que hay 22 °C. Un minuto más tarde se consultará otra vez y el termómetro indicará que hay 5 °C. Tres minutos después se observará el termómetro y éste indicará que hay 40 °C. Dicho termómetro no sería confiable, ya que su aplicación repetida produce resultados distintos.'},

      {type: 'heading', value: 'Métodos empleados para medir la confiabilidad'},

      {type: 'heading2', value: 'Consistencia interna'},

      {type: 'text', value: 'Evalúa si los ítems de una prueba miden lo mismo concepto subyacente. Es comúnmente utilizada para pruebas psicométricas, pero también se aplica en cualquier instrumento que contenga varios ítems o preguntas. Un ejemplo clásico es la prueba de confiabilidad usando el Método de Kuder-Richardson.'},

      {type: 'heading2', value: 'Estabilidad (Test-Retest)'},

      {type: 'text', value: 'Evalúa si una prueba produce los mismos resultados cuando se aplica en diferentes momentos a las mismas personas..'},

      {type: 'heading2', value: 'Equivalencia (Formas Paralelas)'},

      {type: 'text', value: ' Evalúa si diferentes formas de un mismo test proporcionan resultados consistentes.'},

      {type: 'heading2', value: 'Consistencia Inter-observador'},

      {type: 'text', value: 'Evalúa si diferentes evaluadores obtienen resultados consistentes cuando miden lo mismo.'},

      {type: 'heading', value: 'Rangos establecidos para la confiabilidad'},

      {type: 'text', value: 'La confiabilidad de una prueba o medición se evalúa mediante un coeficiente de confiabilidad. Este coeficiente puede tomar valores entre 0 y 1, donde:'},

      { type: 'image', value: 'https://imgur.com/EaHuENh.png' },

      {type: 'text', value: '- 0: es decir, los resultados son inconsistentes y no se puede confiar en ellos).'},

      {type: 'text', value: '- 1: los resultados son completamente consistentes).'},

      {type: 'text', value: 'En general, un valor de 0.7 o superior se considera adecuado en la mayoría de las pruebas, aunque en algunas áreas (como en las ciencias sociales) valores entre 0.6 y 0.7 también pueden ser aceptables.'},

      {type: 'text', value: 'Ejemplo: Si el coeficiente de confiabilidad de una prueba de vida útil de bombillas es 0.85, se puede concluir que la prueba es bastante confiable.'},

      {type: 'heading2', value: 'Referencias'},

      {type: 'text', value: '1. https://www.studocu.com/latam/document/universidad-nacional-autonoma-de-honduras/metodos-de-la-investigacion-en-psicologia/ejemplos-de-confiabilidad/50058961'},

      {type: 'text', value: '2. https://dialnet.unirioja.es/descarga/articulo/2292993.pdf'},

      
    ],
    date: '16-12-2024'
  },
  {
    id: 3,
    title: 'Método KR-20',
    excerpt: 'Método de Kuder-Richardson (KR-20) o de Consistencia Interna en la estadistica.',
    image: 'https://images.unsplash.com/photo-1630983358494-96012d838b84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: [
      { type: 'text', value: 'Uno de los métodos utilizados para medir la consistencia interna es el Método de Kuder-Richardson (KR-20). Este método es utilizado principalmente cuando se tienen ítems dicotómicos (con solo dos posibles respuestas, como "sí/no" o "verdadero/falso") y permite determinar si las diferentes partes de una prueba están midiendo el mismo concepto o constructo.' },

      { type: 'text', value: 'El KR-20 es un tipo de coeficiente de confiabilidad que se calcula utilizando la siguiente fórmula:' },

      { type: 'image', value: 'https://imgur.com/GHTvclc.png' },

      { type: 'text', value: 'Donde:' },

      { type: 'text', value: '- k es el número de ítems (preguntas) en la prueba.' },

      { type: 'text', value: '- P_i es la proporción de respuestas correctas en el ítem i.' },

      { type: 'text', value: '- S² es la varianza total de las puntuaciones de la prueba.' },

      { type: 'heading', value: '¿Cómo se usa este método?' },

      {type: 'heading2', value: '1. Definición del conjunto de ítems' },

      { type: 'text', value: 'Si el investigador está midiendo la vida útil de las bombillas con una serie de preguntas, por ejemplo:' },

      { type: 'text', value: '- ¿La bombilla alcanzó las 1,000 horas de vida útil? (Sí/No).' },

      { type: 'text', value: '- ¿La bombilla encendió correctamente durante al menos 1,000 horas? (Sí/No).' },

      { type: 'text', value: '- ¿La bombilla mantuvo su intensidad durante 1,000 horas? (Sí/No).' },

      {type: 'heading2', value: '2. Calcular la proporción de respuestas correctas:' },

      { type: 'text', value: 'Para cada ítem, el investigador calcula la proporción de respuestas correctas. Por ejemplo:' },

      { type: 'text', value: 'Si en la primera pregunta, 25 de las 30 bombillas superaron las 1,000 horas, entonces: P_1 = 25/30 = 0.83' },

      {type: 'heading2', value: '3. Calcular la varianza total' },

      { type: 'text', value: 'El investigador calcula la varianza total de las puntuaciones en toda la prueba (es decir, la varianza de las respuestas de todas las bombillas).' },

      {type: 'heading2', value: '4. Calcular el KR-20' },

      { type: 'text', value: ' Finalmente, se aplica la fórmula del KR-20, que proporcionará un coeficiente de confiabilidad entre 0 y 1.' },

      { type: 'heading', value: 'Ejemplo de aplicación del método de Kuder-Richardson' },

      { type: 'text', value: 'Supongamos que el investigador tiene una prueba con 5 ítems (preguntas dicotómicas) sobre la vida útil de las bombillas. Los resultados son los siguientes:' },

      { type: 'image', value: 'https://imgur.com/EBh46eM.png' },

      { type: 'text', value: 'Para calcular el KR-20, primero calculamos la varianza total de las puntuaciones y las proporciones de respuestas correctas, luego aplicamos la fórmula. Supongamos que la varianza total (S²) de las puntuaciones en la prueba es 3.2' },

      { type: 'image', value: 'https://imgur.com/Evq2NhE.png' },

      { type: 'text', value: 'Este valor de 0.78 indica que la prueba tiene una buena confiabilidad, ya que el coeficiente es superior a 0.7' },

      { type: 'text', value: 'La confiabilidad es crucial para asegurar que los resultados de las pruebas sean consistentes y precisos. En el caso de la fábrica de bombillas, el investigador debe asegurarse de que los resultados de las mediciones sean consistentes antes de tomar decisiones importantes, como ajustar los procesos de fabricación.' },

      { type: 'text', value: 'El Método de Kuder-Richardson (KR-20) es especialmente útil cuando las pruebas se basan en ítems dicotómicos, ayudando a medir la consistencia interna de las pruebas. Un coeficiente de confiabilidad alto (por ejemplo, 0.78) asegura que los resultados obtenidos a partir de los datos muestren una buena consistencia, lo que genera confianza en los resultados obtenidos.' },

      { type: 'text', value: 'Este enfoque paso a paso garantiza que la información sobre confiabilidad y el uso del Método de Kuder-Richardson sea clara, didáctica y accesible para cualquier persona interesada en mejorar sus procesos de medición.' },

      {type: 'heading2', value: 'Referencias'},

      {type: 'text', value: '1. https://issuu.com/yuridesrodriguez/docs/examen_rodriguez_yurides/s/12901224'},

      {type: 'text', value: '2. https://www.studocu.com/pe/document/universidad-nacional-de-huancavelica/seminario-de-tesis-de-tesis-i/confiabilidad-de-instrumentos-de-medicion/65620429'},

      {type: 'text', value: '3. https://repository.uaeh.edu.mx/revistas/index.php/atotonilco/article/download/6693/9450/'},


      
    ],
    date: '01-06-2025'
  }
];









// export const articles = [
//   {
//     id: 1,
//     title: 'The Art of Modern Web Development',
//     excerpt: 'Exploring the latest trends and best practices in web development.',
//     content: `Web development has evolved significantly over the past decade. Modern web applications demand a different approach to development, focusing on performance, accessibility, and user experience.

//     One of the key aspects of modern web development is the adoption of component-based architectures. This approach allows developers to create reusable, maintainable code that scales well with the application's growth.
    
//     Another important consideration is performance optimization. With users expecting near-instant load times, techniques like code splitting, lazy loading, and proper asset optimization have become crucial.`,
//     image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     date: '2024-03-15'
//   },
//   {
//     id: 2,
//     title: 'Mastering React Hooks',
//     excerpt: 'A comprehensive guide to using React Hooks effectively.',
//     content: `React Hooks have revolutionized how we write React components. They enable developers to use state and other React features without writing class components.

//     The most commonly used hooks are useState and useEffect. useState allows components to maintain their own state, while useEffect handles side effects in functional components.
    
//     Custom hooks are another powerful feature that allows developers to extract component logic into reusable functions.`,
//     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     date: '2024-03-10'
//   },
//   {
//     id: 3,
//     title: 'Building Responsive Layouts',
//     excerpt: 'Learn how to create beautiful, responsive designs that work across all devices.',
//     content: `Responsive web design is no longer optional - it's a necessity. With users accessing websites from various devices, ensuring your layout works well across different screen sizes is crucial.

//     Mobile-first design is an approach where you design for mobile devices first, then progressively enhance the experience for larger screens.
    
//     CSS Grid and Flexbox are powerful tools for creating responsive layouts. Combined with media queries, they enable developers to create fluid, adaptive designs.`,
//     image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     date: '2024-03-05'
//   }
// ];