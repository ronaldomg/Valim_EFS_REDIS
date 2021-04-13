/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:54.1
*/
gx.evt.autoSkip = false;
gx.define('hacervosemprestados', false, function () {
   this.ServerClass =  "hacervosemprestados" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11082_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13082_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15082_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,7,10,13,16,18];
   this.GXLastCtrlId =18;
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV10Ordenacao = "" ;
   this.Events = {"e11082_client": ["'FECHAR'", true] ,"e13082_client": ["ENTER", true] ,"e15082_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20Pgmdesc',fld:'vPGMDESC'}],[{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacervosemprestados());
