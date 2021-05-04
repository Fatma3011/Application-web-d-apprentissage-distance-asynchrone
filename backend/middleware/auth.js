// let user=require('../models/User');
// const router =require('express').Router();
// const bcrypt=require('bcrypt')
// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next) {
// 	const token = req.get('headers') || req.body.headers 
// 	if(!token) return res.json({success: false, message: "No token provided"})
// 	jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decodedData) => {
// 		if(err) return res.json({success: false, message: "Invalid token."})
// 		user.findById(decodedData._id, (err, user) => {
// 			if(!user) return res.json({success: false, message: "Invalid token."})
// 			req.user = user
// 			next()
// 		})
// 	})
// }
// module.exports = {verifyToken }
// // function verifyToken(req, res, next) {
// // 	// grab token from either headers, req.body, or query string
// // 	const token = req.get('headers') || req.body.headers 
// // 	// if no token present, deny access
// // 	if(!token) return res.json({success: false, message: "No token provided"})
// // 	// otherwise, try to verify token
// // 	jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decodedData) => {
// // 		// if problem with token verification, deny access
// // 		if(err) return res.json({success: false, message: "Invalid token."})
// // 		// otherwise, search for user by id that was embedded in token
// // 		user.findById(decodedData._id, (err, user) => {
// // 			// if no user, deny access
// // 			if(!user) return res.json({success: false, message: "Invalid token."})
// // 			// otherwise, add user to req object
// // 			req.user = user
// // 			// go on to process the route:
// // 			next()
// // 		})
// // 	})
// // }