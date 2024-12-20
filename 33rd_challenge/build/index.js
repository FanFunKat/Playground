"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HTMLReport_1.HtmlReport());
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
