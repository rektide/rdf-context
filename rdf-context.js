#!/usr/bin/env node
"use strict"

module.exports= {
	"@context": require( "./prefixes.json"),
	"@graph": require( "./rdf-context.json")
}
if( typeof(require)!== "undefined"&& require.main=== module){
	console.log( JSON.stringify( module.exports, null, "\t"))
}
