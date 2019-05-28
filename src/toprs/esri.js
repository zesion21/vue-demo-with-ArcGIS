// const url = "http://www.baidu.com";
// const esri = {
//   mm: "12"
// };
import esriLoader from "esri-loader";
import url from "./url";

class esri {
  esriConfig;

  // arcgis api 类
  Map;
  ArcGISDynamicMapServiceLayer;
  Navigation;
  MeasureTools;
  SpatialReference;
  Point;
  SimpleLineSymbol;
  SimpleMarkerSymbol;
  Color;
  Graphic;
  FeatureLayer;
  esriLang;
  QueryTask;
  Draw;
  Query;
  on;
  Polygon;
  //arcgis 拓展类
  navToolbar;
  //点线面填充，鼠标进入和点击
  highlightPolygonSymbol;
  highlightPolylineSymbol;
  highlightPointSymbol;
  GraphicsLayer;
  Add;
  SimpleFillSymbol;
  statesPointSymbol;
  statesLineSymbol;
  statesPolygonSymbol;
  sniff;
  scaleUtils;
  dom;
  request;
  lang;
  arrayUtils;
  InfoTemplate;
  GeometryService;
  normalizeUtils;
  BufferParameters;
  resultPointSymbol;
  resultLineSymbol;
  resultPolygonSymbol;
  ArcGISTiledMapServiceLayer;
  Polyline;
  PrintTask;
  PrintTemplate;
  PrintParameters;
  MapImageLayer;
  connect;
  InfoWindow;
  domConstruct;
  Popup;
  RasterLayer;
  Scalebar;
  PictureFillSymbol;
  geometryEngine;
  LabelLayer;
  LabelClass;
  TextSymbol;
  Font;
  SimpleRenderer;
  constructor() {}

  init() {
      // esriLoader.loadScript(url.options);

      const that = this;
      return new Promise((resolve, reject) => {
          esriLoader
              .loadModules(
                  [
                      "esri/config",
                      "esri/map",
                      "esri/layers/ArcGISDynamicMapServiceLayer",
                      "esri/toolbars/navigation",
                      "esri/toolbars/MeasureTools",
                      "esri/SpatialReference",
                      "esri/geometry/Point",
                      "esri/symbols/SimpleMarkerSymbol",
                      "esri/Color",
                      "esri/graphic",
                      "esri/symbols/SimpleFillSymbol",
                      "esri/symbols/SimpleLineSymbol",
                      "esri/layers/FeatureLayer",
                      "esri/lang",
                      "esri/tasks/QueryTask",
                      "esri/toolbars/draw",
                      "esri/tasks/query",
                      "dojo/on",
                      "esri/layers/GraphicsLayer",
                      "esri/dijit/editing/Add",
                      "dojo/sniff",
                      "esri/geometry/scaleUtils",
                      "dojo/dom",
                      "esri/request",
                      "dojo/_base/lang",
                      "dojo/_base/array",
                      "esri/InfoTemplate",
                      "esri/geometry/Polygon",
                      "esri/tasks/GeometryService",
                      "esri/geometry/normalizeUtils",
                      "esri/tasks/BufferParameters",
                      "esri/layers/ArcGISTiledMapServiceLayer",
                      "esri/geometry/Polyline",
                      "esri/tasks/PrintTask",
                      "esri/tasks/PrintTemplate",
                      "esri/tasks/PrintParameters",
                      "esri/layers/MapImageLayer",
                      "dojo/_base/connect",
                      "esri/dijit/InfoWindow",
                      "dojo/dom-construct",
                      "esri/dijit/Popup",
                      "esri/layers/RasterLayer",
                      "esri/dijit/Scalebar",
                      "esri/symbols/PictureFillSymbol",
                      "esri/geometry/geometryEngine",
                      "esri/layers/LabelLayer",
                      "esri/layers/LabelClass",
                      "esri/symbols/TextSymbol",
                      "esri/symbols/Font",
                      "esri/renderers/SimpleRenderer",
                      "dojo/domReady!"
                  ],
                  url.options
              )
              .then(
                  esriLoader.loadCss(
                      "http://192.168.1.85:8080/arcgis_js_v327_api/arcgis_js_api/library/3.27/3.27/esri/css/esri.css"
                  )
              )
              .then(
                  ([
                      esriConfig,
                      Map,
                      ArcGISDynamicMapServiceLayer,
                      Navigation,
                      MeasureTools,
                      SpatialReference,
                      Point,
                      SimpleMarkerSymbol,
                      Color,
                      Graphic,
                      SimpleFillSymbol,
                      SimpleLineSymbol,
                      FeatureLayer,
                      esriLang,
                      QueryTask,
                      Draw,
                      Query,
                      on,
                      GraphicsLayer,
                      Add,
                      sniff,
                      scaleUtils,
                      dom,
                      request,
                      lang,
                      arrayUtils,
                      InfoTemplate,
                      Polygon,
                      GeometryService,
                      normalizeUtils,
                      BufferParameters,
                      ArcGISTiledMapServiceLayer,
                      Polyline,
                      PrintTask,
                      PrintTemplate,
                      PrintParameters,
                      MapImageLayer,
                      connect,
                      InfoWindow,
                      domConstruct,
                      Popup,
                      RasterLayer,
                      Scalebar,
                      PictureFillSymbol,
                      geometryEngine,
                      LabelLayer,
                      LabelClass,
                      TextSymbol,
                      Font,
                      SimpleRenderer
                  ]) => {
                      esriConfig.defaults.io.corsEnabledServers.push(
                          url.corsEnabledServers
                      );
                      esriConfig.defaults.io.corsEnabledServers.push(
                          "sampleserver1.arcgisonline.com"
                      );
                      esriConfig.defaults.geometryService = new GeometryService(
                          url.GeometryServiceUrl
                      );
                      esriConfig.defaults.io.proxyUrl = url.jspUrl;
                      esriConfig.defaults.io.alwaysUseProxy = false;

                      that.esriConfig = esriConfig;
                      that.Map = Map;
                      that.ArcGISDynamicMapServiceLayer = ArcGISDynamicMapServiceLayer;
                      that.Navigation = Navigation;
                      that.MeasureTools = MeasureTools;
                      that.SpatialReference = SpatialReference;
                      that.Point = Point;
                      that.SimpleLineSymbol = SimpleLineSymbol;
                      that.SimpleFillSymbol = SimpleFillSymbol;
                      that.SimpleMarkerSymbol = SimpleMarkerSymbol;
                      that.Color = Color;
                      that.Graphic = Graphic;
                      that.FeatureLayer = FeatureLayer;
                      that.esriLang = esriLang;
                      that.QueryTask = QueryTask;
                      that.Draw = Draw;
                      that.Query = Query;
                      that.on = on;
                      that.GraphicsLayer = GraphicsLayer;
                      that.Add = Add;
                      that.sniff = sniff;
                      that.scaleUtils = scaleUtils;
                      that.dom = dom;
                      that.request = request;
                      that.lang = lang;
                      that.arrayUtils = arrayUtils;
                      that.InfoTemplate = InfoTemplate;
                      that.Polygon = Polygon;
                      that.GeometryService = GeometryService;
                      that.normalizeUtils = normalizeUtils;
                      that.BufferParameters = BufferParameters;
                      that.Polyline = Polyline;
                      that.ArcGISTiledMapServiceLayer = ArcGISTiledMapServiceLayer;
                      that.PrintTask = PrintTask;
                      that.PrintTemplate = PrintTemplate;
                      that.PrintParameters = PrintParameters;
                      that.MapImageLayer = MapImageLayer;
                      that.connect = connect;
                      that.InfoWindow = InfoWindow;
                      that.domConstruct = domConstruct;
                      that.Popup = Popup;
                      that.RasterLayer = RasterLayer;
                      that.Scalebar = Scalebar;
                      that.PictureFillSymbol = PictureFillSymbol;
                      that.geometryEngine = geometryEngine;
                      that.LabelLayer = LabelLayer;
                      that.LabelClass = LabelClass;
                      that.TextSymbol = TextSymbol;
                      that.Font = Font;
                      that.SimpleRenderer = SimpleRenderer;
                      //高亮填充点，线面
                      that.highlightPolygonSymbol = new SimpleFillSymbol(
                          SimpleFillSymbol.STYLE_SOLID,
                          new SimpleLineSymbol(
                              SimpleLineSymbol.STYLE_SOLID,
                              new Color([255, 0, 0]),
                              3
                          ),
                          new Color([125, 125, 125, 0.35])
                      );
                      that.highlightPolylineSymbol = new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([123, 0, 0]),
                          3
                      );
                      that.highlightPointSymbol = new SimpleMarkerSymbol(
                          SimpleMarkerSymbol.STYLE_SQUARE,
                          10,
                          new SimpleLineSymbol(
                              SimpleLineSymbol.STYLE_SOLID,
                              new Color([255, 0, 0]),
                              1
                          ),
                          new Color([0, 255, 0, 0.25])
                      );

                      //查询结果图像高亮显示
                      let r = 9;
                      let g = 217;
                      let b = 58;
                      that.statesPointSymbol = new SimpleMarkerSymbol(
                          SimpleMarkerSymbol.STYLE_CIRCLE,
                          20,
                          new SimpleLineSymbol(
                              SimpleLineSymbol.STYLE_SOLID,
                              new Color([r, g, b, 0.5]),
                              10
                          ),
                          new Color([r, g, b, 0.9])
                      );
                      that.statesLineSymbol = new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([r, g, b, 0.85]),
                          6
                      );
                      that.statesPolygonSymbol = new SimpleFillSymbol(
                          SimpleFillSymbol.STYLE_SOLID,
                          new SimpleLineSymbol(
                              SimpleLineSymbol.STYLE_SOLID,
                              new Color([r, g, b, 0.9]),
                              4
                          ),
                          new Color([r, g, b, 0.5])
                      );
                      //查询结果单机对应数据定位高亮显示样式
                      that.resultPointSymbol = new SimpleMarkerSymbol(
                          SimpleMarkerSymbol.STYLE_CIRCLE,
                          20,
                          new SimpleLineSymbol(
                              SimpleLineSymbol.STYLE_SOLID,
                              new Color([100, 100, 100, 0.5]),
                              10
                          ),
                          new Color([100, 100, 100, 0.9])
                      );
                      that.resultLineSymbol = new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([100, 100, 100, 0.85]),
                          6
                      );
                      that.resultPolygonSymbol = new SimpleFillSymbol(
                          SimpleFillSymbol.STYLE_SOLID,
                          new SimpleLineSymbol(
                              SimpleLineSymbol.STYLE_SOLID,
                              new Color([100, 100, 100, 0.9]),
                              4
                          ),
                          new Color([100, 100, 100, 0.5])
                      );

                      resolve();
                  }
              )
              .catch(error => {
                  reject(error);
              });
      });
  }
}
// export {
//     url,

// };
export default new esri();