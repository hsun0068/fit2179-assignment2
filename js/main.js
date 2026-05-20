const charts = [
  ["#vis1", "js/01_simple_state_ranking.vg.json"],
  ["#vis2", "js/02_bubble_classification_scale.vg.json"],
  ["#vis3", "js/03_interactive_bubble_filter.vg.json"],
  ["#vis4", "js/04_lollipop_obesity_diabetes.vg.json"],
  ["#vis5", "js/05_overview_detail_trends.vg.json"],
  ["#vis6", "js/06_coordinated_map_timeline_area.vg.json"],
  ["#vis7", "js/07_clean_age_sex_heatmap.vg.json"],
  ["#vis8", "js/08_diet_activity_grouped_bar.vg.json"],
  ["#vis9", "js/09_risk_composition_stacked_bar.vg.json"],
  ["#vis10", "js/10_final_clean_dashboard.vg.json"]
];

charts.forEach(([target, spec]) => {
  vegaEmbed(target, spec, { actions: true, renderer: 'canvas' }).catch(console.error);
});
