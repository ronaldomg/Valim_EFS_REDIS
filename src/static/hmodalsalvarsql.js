/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:28.59
*/
gx.evt.autoSkip = false;
gx.define('hmodalsalvarsql', false, function () {
   this.ServerClass =  "hmodalsalvarsql" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e1221e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1321e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1521e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,14,15,16];
   this.GXLastCtrlId =16;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:300,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEARQUIVO",gxz:"ZV13NomeArquivo",gxold:"OV13NomeArquivo",gxvar:"AV13NomeArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13NomeArquivo=Value},v2z:function(Value){gx.O.ZV13NomeArquivo=Value},v2c:function(){gx.fn.setControlValue("vNOMEARQUIVO",gx.O.AV13NomeArquivo,0)},c2v:function(){gx.O.AV13NomeArquivo=this.val()},val:function(){return gx.fn.getControlValue("vNOMEARQUIVO")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSOBRESCREVER",gxz:"ZV22SNSobrescrever",gxold:"OV22SNSobrescrever",gxvar:"AV22SNSobrescrever",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22SNSobrescrever=Value},v2z:function(Value){gx.O.ZV22SNSobrescrever=Value},v2c:function(){gx.fn.setControlValue("vSNSOBRESCREVER",gx.O.AV22SNSobrescrever,0)},c2v:function(){gx.O.AV22SNSobrescrever=this.val()},val:function(){return gx.fn.getControlValue("vSNSOBRESCREVER")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:300,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEARQ",gxz:"ZV12NomeArq",gxold:"OV12NomeArq",gxvar:"AV12NomeArq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12NomeArq=Value},v2z:function(Value){gx.O.ZV12NomeArq=Value},v2c:function(){gx.fn.setControlValue("vNOMEARQ",gx.O.AV12NomeArq,0)},c2v:function(){gx.O.AV12NomeArq=this.val()},val:function(){return gx.fn.getControlValue("vNOMEARQ")},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSQL",gxz:"ZV23SQL",gxold:"OV23SQL",gxvar:"AV23SQL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23SQL=Value},v2z:function(Value){gx.O.ZV23SQL=Value},v2c:function(){gx.fn.setControlValue("vSQL",gx.O.AV23SQL,0)},c2v:function(){gx.O.AV23SQL=this.val()},val:function(){return gx.fn.getControlValue("vSQL")},nac:gx.falseFn};
   this.AV13NomeArquivo = "" ;
   this.ZV13NomeArquivo = "" ;
   this.OV13NomeArquivo = "" ;
   this.AV22SNSobrescrever = "" ;
   this.ZV22SNSobrescrever = "" ;
   this.OV22SNSobrescrever = "" ;
   this.AV12NomeArq = "" ;
   this.ZV12NomeArq = "" ;
   this.OV12NomeArq = "" ;
   this.AV23SQL = "" ;
   this.ZV23SQL = "" ;
   this.OV23SQL = "" ;
   this.AV13NomeArquivo = "" ;
   this.AV22SNSobrescrever = "" ;
   this.AV12NomeArq = "" ;
   this.AV23SQL = "" ;
   this.Events = {"e1221e2_client": ["ENTER", true] ,"e1321e2_client": ["'FECHAR'", true] ,"e1521e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV22SNSobrescrever',fld:'vSNSOBRESCREVER'},{av:'AV12NomeArq',fld:'vNOMEARQ'},{av:'AV23SQL',fld:'vSQL'},{av:'AV27CamAnexo',fld:'vCAMANEXO'},{av:'AV5NomeFile',fld:'vNOMEFILE'}],[{av:'AV22SNSobrescrever',fld:'vSNSOBRESCREVER'},{av:'AV5NomeFile',fld:'vNOMEFILE'},{av:'AV12NomeArq',fld:'vNOMEARQ'},{av:'AV17Retorno',fld:'vRETORNO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12NomeArq',fld:'vNOMEARQ'},{av:'AV23SQL',fld:'vSQL'}],[{av:'AV13NomeArquivo',fld:'vNOMEARQUIVO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalsalvarsql());
