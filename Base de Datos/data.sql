-- ***************** Digital House *********************
-- Sprint 06
-- Script para la población de la base de datos
-- 14 de julio, 2021
-- Equipo PetItMx.
-- Integrantes:
--            Diego Roberto Medina Martinez
--            Vicente Ruiza Parra     
-- *****************************************************/

-- Hacemos uso de la base de datos a poblar

USE petit_db;
-- ********************************
-- ***** POBLACIÓN DE TABLAS ******
-- ********************************

-- Tabla de 'login'
INSERT INTO login (id_login, email, password) VALUES
(NULL, 'pamela@mail.com', 'P0aqmje3loaq'),
(NULL,  'giovanni@mail.com', 'Gti8o9vfaqnhnhi8'),
(NULL, 'rosa@mail.com', 'R4o9swaq'),
(NULL, 'ramses@mail.com', 'R4aqmjswe3sw'),
(NULL, 'cassandra@mail.com', 'Cdaqswswaqnhder4aq'),
(NULL, 'raul@mail.com', 'R4aqu7lode'),
(NULL, 'luis@mail.com', 'Lou7i8swde'),
(NULL, 'vicente@mail.com', 'Vfi8cde3nht5e3'),
(NULL, 'diego@mail.com', 'Dei8e3gto9'),
(NULL, 'melissa@mail.com', 'Mje3loi8swswaq');

-- SELECT * FROM login;

-- Tabla de 'rol'
INSERT INTO rol (id_rol, typeRol) VALUES
(NULL, 'Cliente'),
(NULL, 'Administrador');

-- SELECT * FROM rol;

-- Tabla de 'user'

INSERT INTO user (id_user, first_name, last_name, status, avatar,createdAt,updatedAt,rol_id,login_id) VALUES
(NULL, 'Pamela', 'Arizaga', 1, 'avatar1.png', NULL , NULL, 1, 1),
(NULL,  'Giovanni', 'Almazan', 1, 'avatar2.png', NULL , NULL, 1, 2),
(NULL, 'Rosa', 'Anaya', 0, 'avatar3.png', NULL , NULL, 1, 3),
(NULL, 'Ramses', 'Benavidez', 1, 'avatar4.png', NULL , NULL, 1, 4),
(NULL, 'Cassandra', 'Ceballos', 1, 'avatar5.png', NULL , NULL, 1, 5),
(NULL, 'Raul', 'Dominguez', 0, 'avatar6.png', NULL , NULL, 1, 6),
(NULL, 'Luis', 'Diaz', 0, 'avatar7.png', NULL , NULL, 1, 7),
(NULL, 'Vicente', 'Ruiz', 1, 'avatar8.png', NULL , NULL, 2, 8),
(NULL, 'Diego', 'Medina', 1, 'avatar9.png', NULL , NULL, 2, 9),
(NULL, 'Melissa', 'Puerto', 0, 'avatar10.png', NULL , NULL, 2, 10);

-- SELECT * FROM user;

-- Tabla de 'purchase'

INSERT INTO purchase (id_order, details, statusDetail, comments, createdAt, updatedAt, user_id) VALUES
(NULL, 'Dejar en la entrada principal', 'ATENDIDO', 'EN PROCESO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
(NULL,  'El domicilio esta a un costado de la capilla', 'ATENDIDO', 'EN PROCESO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
(NULL, NULL, 'ENVIADO', 'PROCESANDO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
(NULL, NULL, 'ENVIADO', 'PROCESANDO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4 ),
(NULL, NULL, 'ENVIADO', 'PROCESANDO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5),
(NULL, 'Dejar el paquete con el portero', 'ENTREGADO', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6),
(NULL, NULL, 'ENTREGADO', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

-- SELECT * FROM purchase;

-- Tabla de 'purchase_detail'
INSERT INTO purchase_detail (id_detail, product, quantity, payment, total, image, sendTo, statusPurchase, createdAt, updatedAt, order_id) VALUES
(NULL, 'Royal Canin Alimento Seco para Perro Adulto Raza Grande', 
1, 'Paypal', 1500, 'producto1.png', 'Pamela Arizaga', 'ATENDIDO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
(NULL,  'Royal Canin Alimento Húmedo para Perro Adulto Raza Yorkshire Terrier Receta Polloa', 
1, 'Tarjeta de Débito', 2000, 'producto2.png', 'Giovanni Almazan', 'ATENDIDO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
(NULL, 'Royal Canin Kit Mix Feeding Weight Care Alimento Seco + Latas para Perro Adulto Raza Grande', 
1, 'Tarjeta de Crédito', 49.50, 'producto3.png', 'Rosa Anaya', 'ENVIADO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
(NULL, 'Royal Canin Hydrolyzed Protein Premios para Perro', 
2, 'Paypal', 800, 'producto4.png', 'Ramses Benavidez', 'ENVIADO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4),
(NULL, 'Kong Pelota de Goma Squeezz para Perro', 
5, 'Paypal', 63.90, 'producto5.png', 'Cassandra Ceballos', 'ENVIADO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5),
(NULL, 'Kong Paquete con Tres Pelotas SqueakAir para Perro', 
1, 'Tarjeta de Débito', 120.0, 'producto6.png', 'Raul Dominguez', 'ENTREGADO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6),
(NULL, 'Leaps & Bounds Pelota de Picos Colores Variados para Perro', 
3, 'Tarjeta de Débito', 150, 'producto7.png', 'Luis Diaz', 'ENTREGADO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

-- SELECT * FROM purchase_detail;

-- Table de 'category'
INSERT INTO category (id_category, categoryName, createdAt, updatedAt) VALUES
(NULL, 'Alimento', NULL, NULL),
(NULL, 'Premios', NULL, NULL),
(NULL, 'Accesorios', NULL, NULL),
(NULL, 'Salud e Higiene', NULL, NULL),
(NULL, 'Juguetes', NULL, NULL);

-- SELECT * FROM category;

-- Tabla de 'subcategory'
INSERT INTO subcategory (id_subcategory, subcategoryName, createdAt, updatedAt, category_id) VALUES
(NULL, 'Alimento Seco', NULL, NULL, 1),
(NULL, 'Alimento Natural', NULL, NULL, 1),
(NULL, 'Alimento Húmedo', NULL, NULL, 1),
(NULL, 'Carnaza y Masticables', NULL, NULL, 2),
(NULL, 'Premios Suaves', NULL, NULL, 2),
(NULL, 'Galletas y Snacks', NULL, NULL, 2),
(NULL, 'Hogar', NULL, NULL, 3),
(NULL, 'Tazones y Alimentadores', NULL, NULL, 3),
(NULL, 'Entrenamiento', NULL, NULL, 3),
(NULL, 'Correas y Collares', NULL, NULL, 3),
(NULL, 'Antipulgas y garrapatas', NULL, NULL, 4),
(NULL, 'Limpieza y aseo', NULL, NULL, 4),
(NULL, 'Juguetes Masticable', NULL, NULL, 5);

-- SELECT * FROM subcategory;

-- Tabla de 'color'
INSERT INTO color (id_color, colorName, createdAt, updatedAt) VALUES
(NULL, 'Azul', NULL, NULL),
(NULL, 'Rojo', NULL, NULL),
(NULL, 'Rosa', NULL, NULL),
(NULL, 'Morado', NULL, NULL),
(NULL, 'Negro', NULL, NULL),
(NULL, 'Blanco', NULL, NULL),
(NULL, 'Verde', NULL, NULL),
(NULL, 'Amarillo', NULL, NULL),
(NULL, 'Café', NULL, NULL),
(NULL, 'No aplica', NULL, NULL);

-- SELECT * FROM color;

-- Tabla de 'brands'
INSERT INTO brands (id_brand, brandName, createdAt, updatedAt) VALUES
(NULL, 'Aquadent', NULL, NULL),
(NULL, 'Bark', NULL, NULL),
(NULL, 'Cat Snack', NULL, NULL),
(NULL, 'Deopet', NULL, NULL),
(NULL, 'Evercare', NULL, NULL),
(NULL, 'Flexi', NULL, NULL),
(NULL, 'GoDog', NULL, NULL),
(NULL, 'Happy Doggy', NULL, NULL),
(NULL, 'Instinct', NULL, NULL),
(NULL, 'JW', NULL, NULL),
(NULL, 'Whimzees', NULL, NULL),
(NULL, 'Pure', NULL, NULL),
(NULL, 'Canine Chews', NULL, NULL),
(NULL, 'Extreme', NULL, NULL),
(NULL, "Hill's Science Diet", NULL, NULL),
(NULL, "Merrick", NULL, NULL),
(NULL, "Fancy Feast", NULL, NULL),
(NULL, 'You & Me', NULL, NULL),
(NULL, 'Leaps & Bounds ', NULL, NULL),
(NULL, 'Cunipic ', NULL, NULL);

-- SELECT * FROM brands;

-- Tabla de 'pets'
INSERT INTO pets (id_pet, pet, createdAt, updatedAt) VALUES
(NULL, 'Perro', NULL, NULL),
(NULL, 'Gato', NULL, NULL),
(NULL, 'Aves', NULL, NULL),
(NULL, 'Peces', NULL, NULL),
(NULL, 'Reptiles', NULL, NULL),
(NULL, 'Mamíferos', NULL, NULL);

-- SELECT * FROM pets;

-- Tabla de 'products'

INSERT INTO products (id_product, productName, price, ingredients, description, instructions, image, createdAt, updatedAt, subcategory_id, brand_id, pet_id) VALUES
(NULL, 'Pro Plan Optiderma Sensitive Skin Alimento Seco para Perro Adulto Razas Mediana/Grande Receta Salmón y Arroz', 1933.90, 'Carne de salmón, arroz, harina de pescado, maíz amarillo, gluten de maíz, grasa animal (res y/o cerdo y/o pollo) preservada con tocoferoles mezclados (fuente de vitamina E), digesto animal (hidrolizado de subproductos de cerdo y/o pollo), aceite de pescado, salvado de maíz, celulosa, ortofosfato de calcio, carbonato de calcio, sal, cloruro de potasio, ácido ascórbico (fuente de vitamina C), cloruro de colina, DL-metionina, suplementos vitamínicos (A, D-3, E, B-12), L-isina, sulfato de zinc, sulfato ferroso, sulfato de manganeso, niacina, pantotenato de calcio, suplemento de riboflavina, sulfato de cobre, hidrocloruro de piridoxina, mononitrato de tiamina, ácido fólico, iodato de calcio, selenito de sodio.', 'Pro Plan Sensitive Skin brinda una nutrición superior, sus croquetas minimizan el riesgo de irritación de la piel asociada con la sensibilidad alimentaria. Formulado con salmón, una fuente alternativa de proteínas, ideal para perros sensibles. Conoce el plan de nutrición de última generación que está revolucionando la forma de alimentar y proteger a los perros.', NULL,'producto1.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1, 1),
(NULL, 'Whimzees Brushzees Premio Dental Vegetariano X-Chico para Perro, 48 Piezas', 262.50, 'Almidón de papa, glicerina, celulosa en polvo, lecitina, levadura deshidratada, extracto de malta, harina de lupin dulce, extracto de alfalfa, extracto de paprika, carbonato de calcio.', 'Los premios de Whimzees con forma de cepillo de dientes son una deliciosa forma de ayudar a tu mascota con la limpieza dental. Los surcos y crestas de este premio ayudan a eliminar la placa y el sarro como nunca antes. Diseñado especialmente para la forma en que los perros sujetan y mastican. Convierte el tiempo de juego en un aliento fresco y dientes más limpios, lo que les da a los perros una razón más para saltar de alegría.', 'Recomendamos un premio por día, el tamaño del premio debe ser adecuado al tamaño del perro.|No apto para perros menores de 9 meses.|No apto para perros de menos de 2.2 kg de peso.|Tenga siempre agua fresca disponible para su perro.|Al igual que con cualquier producto comestible, supervise a su perro para asegurarse de que la golosina se mastica adecuadamente. Tragar cualquier artículo sin masticarlo puede ser dañino o incluso fatal para un perro','producto2.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5, 11, 1),
(NULL, 'Canidae Pure Alimento Natural sin Granos para Perro Adulto Receta Salmón y Camote, 10.8 kg', 1500.00,'Salmón, harina de salmón, harina de pescado menhaden, batatas, guisantes, aceite de canola, alfalfa curada al sol, papas, sabor natural, minerales de taurina (proteína de hierro, proteína de zinc, proteína de cobre, sulfato ferroso, sulfato de zinc, sulfato de cobre, yoduro de potasio, manganeso proteína, óxido manganoso, sulfato de manganeso, selenito de sodio), vitaminas (suplemento de vitamina E, mononitrato de tiamina, ácido ascórbico, suplemento de vitamina A, biotina, niacina, pantotenato de calcio, clorhidrato de piridoxina (vitamina B6), suplemento de vitamina B12, riboflavina, vitamina D3 suplemento, ácido fólico), cloruro de colina, tocoferoles mixtos (un conservante), producto seco de fermentación de enterococos faecium, producto seco de fermentación de lactobacillus acidophilus, producto seco de fermentación de lactobacillus casei, producto seco de fermentación de lactobacillus plantarum, extracto seco de fermentación de trichoderma longibrachiatum.', 'Canidae Pure Alimento Natural para Perro Adulto Receta de Salmón y Camote, es un alimento diseñado con ingredientes reales y naturales pensados para cubrir las necesidades de tu perro. Es un alimento elaborado con una receta simple de ingredientes limitados que tiene como primer ingrediente proteína de salmón. Su fórmula está elaborada con 10 ingredientes principales garantizan que tu mascota realmente aprovechará todos y cada uno de los nutrientes que este alimento le aporta. ¡Nutre a tu perro de una forma saludable con un delicioso sabor!',  'Al cambiar a la comida para perros CANIDAE® PURE ¿, algunos perros pueden mejorar haciendo una transición gradual durante 7-10 días. Comience con el 25% de la nueva comida mezclada con el 75% de la dieta anterior y aumente gradualmente la nueva mientras disminuye la anterior hasta que se complete la transición.', 'producto3.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 12, 1),
(NULL, 'Canine Chews Carnaza para Perro en Forma de Stick Granulado Sabor Res', 130.00,'Ingredientes del Saborizado: Puede contener uno o más de los siguientes: Harina de trigo, Goma de Xantan, maltodextrina, sorbato de potasio, sal, color caramelo, rojo número 40, amarillo número 5, amarillo número 6, saborizante artificial, potenciador de sabor .', 'Masticable de Carnaza para Perro. Auxiliar en entrenamientos, Es Ideal para todas las razas. Además de que por su sabor a Res les encanta. Es un excelente premio para tu Perro por un buen comportamiento. Ayuda a ejercitar la mandíbula y a mantener los dientes limpios y libres de sarro, reduciendo así el mal aliento', 'Administrar 3 pzas Maximo Por Dia','producto4.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 13, 1),
(NULL, 'Precision Pet Cabina Extreme Outback Casa de Exterior para Perro, Grandee', 4699.00, NULL, 'La casa para exterior Extreme Outback es el refugio perfecto al aire libre para tu perro. Construido con madera maciza y herrajes de acero inoxidable lo hacen extremadamente resistente. Con forma de cabaña tradicional, sus patas nivelables y resistentes a la intemperie permiten que la estructura se equilibre incluso en superficies rugosas. Meticulosamente diseñada, esta casa para perros también cuenta con un techo de tejas de asfalto resistente a la lluvia para una mayor protección para su mascota contra los elementos climáticos.','Instrucciones ilustradas completas incluidas. Destornillador necesario para el montaje.', 'producto5.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7, 14, 1), 
(NULL, "Hill's Science Diet Alimento Seco para Gato Adulto Receta Pollo, 7.3 kg", 1312.00, 'Pollo (carne, piel), trigo entero, harina de gluten de maíz, grasa de pollo, harina de pollo (carne, piel), pulpa de remolacha desecada, arroz integral, saborizante de hígado de pollo, sulfato de calcio, ácido láctico, cloruro de potasio, aceite de pescado, aceite de soya, sal yodada, cloruro de colina, vitaminas (complemento de vitamina e, l-ascorbil-2-polifosfato (fuente de vitamina c), complemento de niacina, mononitrato de tiamina, complemento de vitamina a, pantotenato de calcio, complemento de riboflavina, biotina, complemento de vitamina b12, clorhidrato de piridoxina, ácido fólico, complemento de vitamina d3), taurina, minerales (sulfato ferroso, óxido de zinc, sulfato de cobre, óxido manganoso, yodato de calcio, selenito de sodio), fibra de avena, tocoferoles mixtos para la frescura, sabores naturales (romero, té verde, menta verde), beta caroteno, manzanas, brócoli, zanahorias, arándanos, guisantes verdes.', "Proporciona a tu gato nutrición confiable y balanceada con el alimento para gatos Hill's Science Diet Optimal Care. Un alimento premium seco para gatos que está hecho con pollo verdadero como ingrediente #1, una proteína de alta calidad que ayuda a conservar los músculos magros. El alimento seco para gatos Science Diet contiene una mezcla antioxidante comprobada para apoyar el sistema inmunológico, así como ácidos grasos omega-6 y otros nutrientes para mejorar la piel y pelaje. Y como todos los alimentos secos para mascotas Hill's, no contiene colores, sabores o conservadores artificiales. Ds a tu mascota un gran sabor y magnífica calidad con el alimento para gatos adultos Science Diet.", 'Alimento balanceado de mantenimiento para gatos adultos de 1-6 años.|Almacenar en un lugar fresco y seco.|Consulte al médico veterinario.','producto6.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 15, 2),
(NULL, 'Merrick Purrfect Bistro Alimento Natural sin Granos para Gato Adulto Receta Salmón, 5.4 kg', 1250.00, 'Salmón deshuesado, harina de pollo, harina de pavo, batatas, guisantes, papas, proteína de guisantes, grasa de pollo (conservada con tocoferoles mixtos), producto de huevo seco, proteína de papa, sabor natural, tapioca, linaza molida, ácido fosfórico, inulina (de achicoria raíz), concentrado de proteína de suero seco, aceite de girasol, cloruro de colina, sal, harina de alfalfa orgánica seca, aceite de girasol, taurina, minerales (complejo de aminoácidos de hierro, complejo de aminoácidos de zinc, sulfato de zinc, selenito de sodio, complejo de aminoácidos de manganeso, Complejo de aminoácidos de cobre, sulfato de cobre, yoduro de potasio, proteína de cobalto, carbonato de cobalto), extracto de yucca schidigera, vitaminas (suplemento de vitamina E, suplemento de vitamina B12.', 'Merrick Purrfect Bistro Alimento Natural para Gato Receta de Salmón, brinda a tu gatito una dieta libre de granos, alta en proteínas, con niveles moderados de grasa y bajos niveles de carbohidratos. Esta fórmula está creada para cubrir las necesidades nutricionales de tu mascota gracias a que está fortificada con vitaminas, minerales y antioxidantes. Diseñada con una dieta equilibrada que contiene 70% de proteína y ácidos grasos saludables y 30% de productos frescos, vitaminas y minerales, además, provee a tu felino de salud que puedes observar, ya que contiene ácidos grasos esenciales como Omega- 6 y 3 que ayudarán a que tu gato tenga una piel pelo saludable y suave.', NULL,'producto7.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 16, 2),
(NULL, 'Fancy Feast Petits Filets Alimento Húmedo para Gato Receta de Salmón, 85 ge', 20.25, 'Caldo De Pescado, Salmón, Hígado De Cerdo, Gluten De Trigo, Vísceras De Cerdo, Carne De Pollo, Almidón De Maíz Modificado, Sabores Artificiales Y Naturales, Sal, Fosfato Tricálcico, Colorantes (Dióxido De Titanio, Óxido De Hierro Amarillo, Rojo 3), Concentrado De Proteína De Soya, Cloruro De Potasio, Taurina, Sulfato De Magnesio, Cloruro De Colina, Mononitrato De Tiamina, Suplemento De Vitamina E, Sulfato De Zinc, Sulfato Ferroso, Niacina, Pantotenato De Calcio, Suplemento De Vitamina A, Sulfato De Cobre, Complejo Sódico De Bisulfito De Menadiona (Fuente De Actividad De Vitamina K), Sulfato De Manganeso, Hidrocloruro De Piridoxina, Suplemento De Riboflavina, Suplemento De Vitamina B12, Biotina, Ácido Fólico, Suplemento De Vitamina D3, Ioduro De Potasio.', 'Consiente a tu gato con los Mini Filetes con Salmón Fancy Feast®, una sofisticada combinación de sabores a la parrilla en una delicada salsa. La ración promedio es de 3 latas de 85 g (255 g) por cada 4,5 kg de peso de su gato adulto, repartida en 2 o más comidas. Las necesidades individuales pueden variar y deben ser ajustadas para mantener el peso saludable de su gato.', NULL,'producto8.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 17, 2),
(NULL, 'You & Me Mueble Tipo Árbol de 7 Niveles con Juguete y Rascador de Cartón para Gato', 2303.00, NULL, 'El árbol para gato de 7 niveles You & Me cumple con los deseos de tu mejor amigo gatuno de jugar, descansar y rascar con una variedad de texturas y formas agradables. El juguete colgante móvil en esta pieza de mobiliario para gatos los entretiene y los tienta a saltar y divertirse, mientras que los postes de sisal y el panel de rascador de cartón satisfacen sus necesidades de rascar y afilar sus garras.', 'Este artículo no es adecuado para niños. Siempre supervise a su mascota al usar este artículo. Inspeccione el producto en busca de daños y deséchelo si alguna pieza se desgasta, se suelta o se desprende. Para mayor estabilidad, recomendamos colocar el producto contra la pared o esquina. Al igual que con la mayoría de los muebles, no los coloque en un lugar expuesto a la luz solar directa o al área húmeda, ya que puede causar decoloración y oxidación potencial en las superficies metálicas. No se recomienda para uso en exteriores.','producto9.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7, 18, 2),
(NULL, 'Leaps & Bounds Varita Multicolor Diseño Oruga para Gato', 59.00, NULL, 'La varita de oruga es es un juguete fantástico para que tu gatito se mueva. Seguro que sacará el lado salvaje de tu felino. Las tenues plumas seguramente tentarán a tu gato durante horas. Esta varita es una excelente manera de darle a tu peludo amigo un poco de ejercicio disfrazado inteligentemente como divertido ya que corre, persigue y salta. Toda esta actividad fomenta una vida sana, previene el aburrimiento y promueve la vinculación entre tu y tu felino.','PRECAUCIÓN: SOLO PARA USO DE MASCOTAS. NO ES UN JUGUETE PARA NIÑOS. Las piezas pequeñas y las bolas pequeñas pueden presentar un peligro de asfixia o un riesgo de bloqueo gastrointestinal. Elija juguetes según el tamaño de la mascota y los hábitos de juego. Ningún juguete es indestructible. Supervise siempre a la mascota durante el juego para evitar la ingestión accidental de piezas. Inspeccione regularmente. Reemplácelo si alguna pieza se daña. Si el juguete se moja, puede ocurrir alguna transferencia de color.', 'producto10.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 13, 19, 2), 
(NULL, 'Cunipic Premium Alimento Seco para Conejos Adultos, 5 kg', 421.00, 'Cereales, subproductos de origen vegetal, alfalfa, copos de maíz y copos de cereal añadidos, aceites y grasas vegetales, sustancias minerales, aceite de oliva.', 'Cunipic Premium para conejo adulto es un alimento en pellets completo y equilibrado especialmente creado para conejos adultos a partir de los 6 meses de edad. Este alimento se presenta en forma de pienso multipartícula compuesto por un 60% de pellets y un 40% de cereales (copos de maíz y gránulos de alfalfa deshidratada). Entre los beneficios de conejo Adult podemos encontrar un equilibrio adecuado de proteína de fácil digestión y fibra la cual ayuda a regular el transito intestinal y estimula el sistema inmune.', 'Ofrecer la ración diaria recomendada proporcionada en el envase. Ofrecer siempre agua limpia y fresca al animal. Conservar en lugar fresco y seco. Su mascota debe tener siempre a su disposición una generosa cantidad de heno de buena calidad. Se recomienda suministrar suplementos vitamínicos y minerales para evitar carencias nutricionales.','producto11.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 20, 6),
(NULL, 'Cunipic Alpha Pro Snack de Manzana, 50 g', 89.00, 'Cereales, aceites y grasas (2,4% ácidos grasos omega 3 y 5,7% ácidos grasos omega 6), subproductos de origen vegetal, fruta (4% manzana) y minerales.', 'Alimento complementario para conejos y roedores. Un snack sano y delicioso crujiente por fuera y relleno de una crema de manzana. ', 'Administrar libremente como premio.Comprobar que el animal tenga siempre agua fresca y limpia a su disposición. Conservar en un lugar limpio y fresco.','producto12.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6, 20, 6),
(NULL, 'Cunipic Naturaliss Alimento Natural para Cuyo Adulto, 1.8 kg', 300.00, 'Heno timothy, heno de pasto curado al sol, harina de alfalfa deshidratada, productos de forraje, zanahoria deshidratada, copos de guisantes enriquecidos con ácido ascórbico estabilizado (fuente de vitamina c), ortiga (urtica dioica l.), aceite vegetal, caléndula (calendula o cinalis l.), suplemento vitamínico, carbonato de calcio, sal, fosfato monocálcico.', 'Naturaliss para cuyo es un alimento completo adecuado para cobayas adultas (a partir de los 6 meses de edad) que contiene todos los nutrientes necesarios para que tu cobaya crezca sana, fuerte y feliz. Naturaliss es un producto 100 % natural, sin colorantes añadidos y con una alta palatabilidad gracias a la diversidad de plantas y aromas que contiene en cada bolsa. Además, contiene un alto porcentaje en proteína y fibra para favorecer el crecimiento y ayudar a prevenir problemas gastrointestinales, y un porcentaje de carbohidratos equilibrado de forma que asegura una flora intestinal saludable y ayuda a prevenir problemas de obesidad. ','Administra la ración diaria recomendada. Proporciona agua fresca y limpia siempre a disposición. Consérvalo en un lugar fresco y seco.', 'producto13.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 20, 6),
(NULL, 'You & Me Polvo de Baño para Chinchilla, 1.13 kg', 200.00, NULL, 'El polvo de chinchilla es un polvo de polvo natural de alta calidad. Protege el pelaje de la chinchilla al eliminar aceites extra y humedad, dejándolo saludable y limpio. Este polvo es completamente natural, sin químicos añadidos o utilizados durante el procesamiento. Este polvo tiene el tamaño de partícula ideal para penetrar y limpiar el pelaje denso de la chinchilla. You & Me Chinchilla Dust se puede reciclar como un aditivo para el suelo para la jardinería doméstica.',NULL, 'producto14.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 12, 18, 6),
(NULL, 'You & Me Cepillo para Pequeñas Mascotas', 120.00, NULL, 'Un cepillo de cerdas suaves de tamaño perfecto para animales pequeños. Este cepillo de aseo elimina suavemente el vello no deseado para promover un pelaje limpio y brillante. Ayuda a reducir la aparición de bolas de pelo y tiene un agarre cómodo.', NULL,'producto15.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 12, 18, 6),
(NULL, 'You & Me Hábitat con Pedestal para Ninfa Color Negro', 4400.00, NULL, 'Da a tu mejor amigo el espacio para saltar y jugar con el hábitat con base You & Me. Es hermosa y segura, fue diseñada para cubrir las necesidades de las ninfas loros pequeños y otras aves de compañía de tamaño similar. Incluye 2 platos y 2 perchas que son accesorios básicos para un buen inicio.', 'Destinado a ser utilizado como hábitat para aves. No lo exponga a la luz solar directa, ya que puede provocar que su mascota se sobrecaliente. No se recomienda para uso en exteriores. Inspeccione y limpie regularmente. Reemplácelo si alguna pieza se daña. Proporcione a la mascota comida fresca y agua en todo momento.','producto16.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7, 18, 3),
(NULL, 'Cunipic Alimento Natural Super Premium para Loros, 3 kg', 570.00, 'Semilla De Girasol, Alazor, Arroz Con Cáscara, Alforfón, Avena, Maíz Plata, Mijo Amarillo, Semilla De Girasol Blanca, Soja Verde, Alpiste, Cacahuete Sin Cáscara, Cebada, Avena Pelada, Arroz, Gránulos Extrusionados, Frutos Silvestres, Cáñamo, Piñones, Maíz Desgranado, Semilla De Calabaza, Pan De St. John’S, Pasas, Copos De Guisante, Arroz Hinchado, Grit.', 'Comida completa y equilibrada adecuada para la alimentación de loros de cualquier tamaño. Es un alimentos rico proteínas y aminoácidos esenciales para el mantenimiento de una óptima salud. Es un producto recomendado por veterinarios y envasado en atmósfera modificada para garantizar su frescura.', 'Dejar a libre disposición del animal. Ofrecer siempre agua limpia y fresca al animal. Conservar en lugar fresco y seco.','producto17.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 20, 3),
(NULL, 'You & Me Zona de Juegos 3 en 1 para Ave', 379.00, NULL, 'You & Me 3-en-1 Zona de juegos para aves. El diseño único ofrece 3 opciones para configurar el patio de recreo Incluye una escalera, un columpio y un juguete colgante para el entretenimiento de tu mascota. Gimnasio divertido para jugar hecho con madera y cuerda de algodón diseño portátil y ligero.', NULL,'producto18.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7, 18, 3),
(NULL, 'You & Me Comedero de Metal con Clip, Chico', 49.00, NULL, 'Apto para lavavajillas y resistente a los rasguños. Para las aves y otros animales pequeños. Abrazadera de soporte se adapta fácilmente a cualquier estilo jaula.', NULL,'producto19.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8, 18, 3),
(NULL, 'Aquadent Solución para la Higiene Oral de Perros y Gatos, 250 ml', 410.00, 'Cada 100 ml contiene: Xilitol 0.51 g. Vehículo c.b.p. 100 ml', 'Es una solución refrescante y deliciosa que debe ser agregada al agua que beben nuestros perros y gatos, para el control del mal aliento.', 'Agitar el producto antes de usar. Diluye 5 ml de Aquadent en 500 ml de agua utilizando el vaso dosificador del producto. Administra la solución como agua de bebida a la mascota. Cambia la solución cada 24 horas, aunque no haya sido totalmente consumida. Consérvalo en un lugar fresco y seco, entre 15°C y 30°C, en su envase original, perfectamente cerrado. Protegido de la luz solar directa. Mantenlo fuera del alcance de los niños y animales domésticos.','producto20.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 12, 1, 3);



-- Tabla de 'products_color'
INSERT INTO products_color (color_id, product_id, quantity) VALUES
(1, 1, 3),
(1, 2, 4),
(1, 3, 1),
(1, 4, 2),
(2, 2, 3),
(3, 3, 4),
(4, 6, 3),
(5, 7, 4),
(5, 8, 1),
(6, 8, 2),
(7, 9, 3),
(8, 10, 4);

-- SELECT * FROM products_color;

-- Tabla de 'cart'
INSERT INTO cart (id_cart, createdAt, updatedAt, product_id, user_id) VALUES
(1, NULL, NULL, 3, 1),
(2, NULL, NULL, 4, 2),
(3, NULL, NULL, 1, 3),
(4, NULL, NULL, 7, 4),
(5, NULL, NULL, 8, 5),
(6, NULL, NULL, 2, 6),
(7, NULL, NULL, 4, 7);

-- SELECT * FROM cart;

-- Tabla de 'cart'
INSERT INTO products_cart (cart_id, product_id, quantity) VALUES
(1, 1, 3),
(1, 2, 3),
(1, 3, 3),
(2, 1, 3),
(2, 2, 3),
(3, 18, 3),
(3, 14, 3),
(3, 1, 3),
(4, 10, 3),
(5, 6, 3);

-- SELECT * FROM products_cart;