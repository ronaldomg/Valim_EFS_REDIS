/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:27.90
*/
gx.evt.autoSkip = false;
gx.define('hconsultarnotainutilizadajustif', false, function () {
   this.ServerClass =  "hconsultarnotainutilizadajustif" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e1212l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1412l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1512l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,26,27];
   this.GXLastCtrlId =27;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TXTCONTA", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE9",grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAINUTILIZADASERIE",gxz:"ZV16SaidaInutilizadaSerie",gxold:"OV16SaidaInutilizadaSerie",gxvar:"AV16SaidaInutilizadaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SaidaInutilizadaSerie=Value},v2z:function(Value){gx.O.ZV16SaidaInutilizadaSerie=Value},v2c:function(){gx.fn.setControlValue("vSAIDAINUTILIZADASERIE",gx.O.AV16SaidaInutilizadaSerie,0)},c2v:function(){gx.O.AV16SaidaInutilizadaSerie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAINUTILIZADASERIE")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAINUTILIZADANUMERO",gxz:"ZV17SaidaInutilizadaNumero",gxold:"OV17SaidaInutilizadaNumero",gxvar:"AV17SaidaInutilizadaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaInutilizadaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17SaidaInutilizadaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAINUTILIZADANUMERO",gx.O.AV17SaidaInutilizadaNumero,0)},c2v:function(){gx.O.AV17SaidaInutilizadaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAINUTILIZADANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[26]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAINUTILIZADAJUSTIFICATIVA",gxz:"ZV15SaidaInutilizadaJustificativa",gxold:"OV15SaidaInutilizadaJustificativa",gxvar:"AV15SaidaInutilizadaJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SaidaInutilizadaJustificativa=Value},v2z:function(Value){gx.O.ZV15SaidaInutilizadaJustificativa=Value},v2c:function(){gx.fn.setControlValue("vSAIDAINUTILIZADAJUSTIFICATIVA",gx.O.AV15SaidaInutilizadaJustificativa,0)},c2v:function(){gx.O.AV15SaidaInutilizadaJustificativa=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAINUTILIZADAJUSTIFICATIVA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"DIV1", format:2,grid:0};
   this.AV16SaidaInutilizadaSerie = "" ;
   this.ZV16SaidaInutilizadaSerie = "" ;
   this.OV16SaidaInutilizadaSerie = "" ;
   this.AV17SaidaInutilizadaNumero = 0 ;
   this.ZV17SaidaInutilizadaNumero = 0 ;
   this.OV17SaidaInutilizadaNumero = 0 ;
   this.AV15SaidaInutilizadaJustificativa = "" ;
   this.ZV15SaidaInutilizadaJustificativa = "" ;
   this.OV15SaidaInutilizadaJustificativa = "" ;
   this.AV16SaidaInutilizadaSerie = "" ;
   this.AV17SaidaInutilizadaNumero = 0 ;
   this.AV15SaidaInutilizadaJustificativa = "" ;
   this.Events = {"e1212l2_client": ["'FECHAR'", true] ,"e1412l2_client": ["ENTER", true] ,"e1512l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15SaidaInutilizadaJustificativa',fld:'vSAIDAINUTILIZADAJUSTIFICATIVA'},{av:'AV17SaidaInutilizadaNumero',fld:'vSAIDAINUTILIZADANUMERO'},{av:'AV16SaidaInutilizadaSerie',fld:'vSAIDAINUTILIZADASERIE'}],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarnotainutilizadajustif());
