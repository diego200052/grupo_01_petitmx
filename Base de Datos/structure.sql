-- ***************** Digital House *********************
-- Sprint 06
-- Proyecto: Desarrollo de la Base de Datos de una tienda para mascotas
-- 14 de julio, 2021
-- Equipo PetItMx.
-- Integrantes:
--            Diego Roberto Medina Martinez
--            Vicente Ruiza Parra     
-- *****************************************************/


-- Creacion de la base de datos tienda_dbsoft
DROP DATABASE IF EXISTS petit_db;
CREATE DATABASE petit_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- Nos cambiamos a la BD para crear las tablas
USE petit_db;

-- *******************************
-- ***** CREACIÓN DE TABLAS ******
-- *******************************

-- Creación de la tabla de 'login'

CREATE TABLE login(
	id_login	INT(10)		UNSIGNED	AUTO_INCREMENT,
    email		VARCHAR(30)	NOT NULL UNIQUE,
    password	VARCHAR(75)	NOT NULL,
	PRIMARY KEY(id_login)
);

-- Creación de la tabla de 'rol'

CREATE TABLE rol(
	id_rol		INT(4)		UNSIGNED	AUTO_INCREMENT,
    typeRol		VARCHAR(20)	NOT NULL,
    PRIMARY KEY(id_rol)
);

-- Creación de la tabla 'users'

CREATE TABLE user (
	id_user 	INT(10)			UNSIGNED	AUTO_INCREMENT,
    first_name 	VARCHAR(50) 	NOT NULL,
    last_name	VARCHAR(50)		NOT NULL,
    status		TINYINT(1)		NOT NULL,
    avatar		VARCHAR(255)	NOT NULL	DEFAULT 'image-default.png',
    createdAt	TIMESTAMP		NULL		DEFAULT NULL,
    updatedAt	TIMESTAMP		NULL		DEFAULT	NULL,
    rol_id		INT(4)		UNSIGNED	NOT NULL,
    login_id	INT(10)		UNSIGNED	NOT NULL,
    PRIMARY KEY(id_user),
    FOREIGN KEY fk_user_login (login_id) REFERENCES login(id_login)
	ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_user_rol (rol_id) REFERENCES rol(id_rol)
	ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creación de la tabla 'pedido'

CREATE TABLE purchase(
	id_order 		INT(10)			UNSIGNED	AUTO_INCREMENT,
    details			VARCHAR(50)		NULL,
    statusDetail	VARCHAR(20)		NOT NULL,
    comments		VARCHAR(100)	NULL,
    createdAt		TIMESTAMP		NOT NULL 	DEFAULT CURRENT_TIMESTAMP,
    updatedAt		TIMESTAMP		NOT NULL 	DEFAULT CURRENT_TIMESTAMP,
    user_id			INT(10)		UNSIGNED	NOT NULL,
    PRIMARY KEY(id_order),
    FOREIGN KEY fk_purchase_user (user_id) REFERENCES user(id_user)
	ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creación de la tabla 'purchase_detail'

CREATE TABLE purchase_detail(
	id_detail 		INT(10)			UNSIGNED	AUTO_INCREMENT,
    product			VARCHAR(150)	NOT NULL,
    quantity		SMALLINT		UNSIGNED	NOT NULL,
    payment			VARCHAR(30)		NOT NULL,
    total			DECIMAL(12,2)	NULL,
    image			VARCHAR(255)	NULL		DEFAULT NULL,
    sendTo			VARCHAR(100)	NULL		DEFAULT	NULL,
    statusPurchase	VARCHAR(20)		NOT NULL,
    createdAt		TIMESTAMP		NOT NULL,
    updatedAt		TIMESTAMP		NOT NULL,
    order_id		INT(10)			UNSIGNED	NOT NULL,
    PRIMARY KEY(id_detail),
    FOREIGN KEY fk_detail_purchase (order_id) REFERENCES purchase(id_order)
	ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creación de la tabla 'category'

CREATE TABLE category(
	id_category		INT(4)			UNSIGNED	AUTO_INCREMENT,
    categoryName	VARCHAR(20)		NOT NULL,
    createdAt		TIMESTAMP		NULL,
    updatedAt		TIMESTAMP		NULL,
    PRIMARY KEY(id_category)
);

-- Creación de la tabla 'subcategory'

CREATE TABLE subcategory(
	id_subcategory	INT(10)			UNSIGNED	AUTO_INCREMENT,
    subcategoryName	VARCHAR(30)		NOT NULL,
    createdAt		TIMESTAMP		NULL,
    updatedAt		TIMESTAMP		NULL,
    category_id		INT(4)			UNSIGNED	NOT NULL,
    PRIMARY KEY(id_subcategory),
    FOREIGN KEY fk_subcategory_category (category_id) REFERENCES category(id_category)
	ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creación de la tabla 'color'

CREATE TABLE color(
	id_color	INT(4)			UNSIGNED	AUTO_INCREMENT,
    colorName	VARCHAR(20)		NOT NULL,
    createdAt	TIMESTAMP		NULL,
    updatedAt	TIMESTAMP		NULL,
    PRIMARY KEY(id_color)
);

-- Creación de la tabla 'brand'

CREATE TABLE brand(
	id_brand	INT(10)			UNSIGNED	AUTO_INCREMENT,
    brandName	VARCHAR(20)		NOT NULL,
    createdAt	TIMESTAMP		NULL,
    updatedAt	TIMESTAMP		NULL,
    PRIMARY KEY(id_brand)
);

-- Creación de tabla 'pets'

CREATE TABLE pets(
	id_pet		INT(4)			UNSIGNED	AUTO_INCREMENT,
    pet			VARCHAR(20)		NOT NULL,
    createdAt	TIMESTAMP		NULL,
    updatedAt	TIMESTAMP		NULL,
    PRIMARY KEY(id_pet)
);

-- Creación de la tabla 'products'

CREATE TABLE products(
	id_product		INT(10)			UNSIGNED	AUTO_INCREMENT,
    productName		VARCHAR(150)	NOT NULL,
    price			DECIMAL(12,2)	NOT NULL,
    ingredients		TEXT			NULL,
    description		TEXT			NOT NULL,
    instructions	TEXT			NULL,
    image			VARCHAR(255)	NOT NULL,
    createdAt		TIMESTAMP		NOT NULL,
    updatedAt		TIMESTAMP		NOT NULL,
    subcategory_id	INT(10)			UNSIGNED	NOT NULL,
    brand_id		INT(10)			UNSIGNED	NOT NULL,
    pet_id			INT(4)			UNSIGNED	NOT NULL,
    PRIMARY KEY(id_product),
    FOREIGN KEY fk_products_subcategory (subcategory_id) REFERENCES subcategory(id_subcategory)
	ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_products_brand (brand_id) REFERENCES brand(id_brand)
	ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_products_pet (pet_id) REFERENCES pets(id_pet)
	ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creacion de la tabla 'products_color'

CREATE TABLE products_color(
	color_id		INT(4)		UNSIGNED,
    product_id		INT(10)		UNSIGNED,
    quantity		SMALLINT	UNSIGNED	NOT NULL,
    PRIMARY KEY (color_id, product_id),
    FOREIGN KEY fk_pcolor_color (color_id) REFERENCES color(id_color)
	ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_pproducts_producto (product_id) REFERENCES products(id_product)
	ON DELETE CASCADE ON UPDATE CASCADE
);
    
-- Creación de la tabla 'cart'

CREATE TABLE cart(
	id_cart		INT(10)		UNSIGNED	AUTO_INCREMENT,
    quantity	SMALLINT	NOT NULL,
    createdAt	TIMESTAMP	NULL,
    updatedAt	TIMESTAMP	NULL,
    product_id	INT(10)		UNSIGNED	NOT NULL,
    user_id		INT(10)		UNSIGNED	NOT NULL,
    PRIMARY KEY(id_cart),
    FOREIGN KEY fk_cart_products (product_id) REFERENCES products(id_product)
	ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_cart_user (user_id) REFERENCES user(id_user)
	ON DELETE CASCADE ON UPDATE CASCADE
);
