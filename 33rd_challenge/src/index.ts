import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HTMLReport";

const matchReader = MatchReader.fromCsv('football.csv');

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport()
);

matchReader.load();
summary.buildAndPrintReport(matchReader.matches)