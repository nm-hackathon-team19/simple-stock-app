CREATE DATABASE tradingstocks;

CREATE TABLE public.holdings
(
    holding_id serial,
    name character varying,
    symbol character varying,
    shares integer,
    price integer,
    percent_change character varying,
    PRIMARY KEY (holding_id)
);
