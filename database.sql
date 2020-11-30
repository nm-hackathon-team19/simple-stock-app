CREATE DATABASE tradingstocks;

CREATE TABLE public.holdings
(
    holding_id serial,
    company character varying,
    share_number integer,
    total_money integer,
    symbol character varying,
    share_price integer,
    PRIMARY KEY (holding_id)
);