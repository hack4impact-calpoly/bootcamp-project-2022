"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose_1 = require("mongoose");
const ingredientsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
});
const instructionsSchema = new mongoose_1.Schema({
    mainList: { type: String, required: true },
    subList: { type: [String], required: true },
});
const recipeSchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: [{ title: String, ingredients: [String] }], required: true },
    instructions: { type: [{ mainList: String, subList: [String] }], required: true },
    slug: String
}, { collection: 'Recipes' });
exports.Recipe = (0, mongoose_1.model)('Recipes', recipeSchema, 'Recipes');
