#!/usr/bin/env node
"use strict"

module.exports= require( "./@id.json")["@id"]
if( typeof(require)!== "undefined"&& require.main=== module){
	console.log( module.exports)
}
