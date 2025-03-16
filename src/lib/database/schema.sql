
CREATE TABLE continents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(2) NOT NULL UNIQUE
);

CREATE TABLE regions (
  id SERIAL PRIMARY KEY,
  continent_id INTEGER REFERENCES continents(id),
  name VARCHAR(100) NOT NULL
);

CREATE TABLE countries (
  id SERIAL PRIMARY KEY,
  region_id INTEGER REFERENCES regions(id),
  name VARCHAR(100) NOT NULL,
  code VARCHAR(2) NOT NULL UNIQUE
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  native_name VARCHAR(100),
  speakers BIGINT,
  status VARCHAR(50),
  description TEXT
);

CREATE TABLE country_languages (
  country_id INTEGER REFERENCES countries(id),
  language_id INTEGER REFERENCES languages(id),
  is_official BOOLEAN DEFAULT false,
  percentage_speakers DECIMAL(5,2),
  PRIMARY KEY (country_id, language_id)
);
