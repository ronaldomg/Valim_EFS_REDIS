/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:6.62
*/
gx.evt.autoSkip = false;
gx.define('haberturamescxabco', false, function () {
   this.ServerClass =  "haberturamescxabco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11bm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bm2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e16bm2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17bm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,39,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV19Mes",gxold:"OV19Mes",gxvar:"AV19Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV19Mes,0)},c2v:function(){gx.O.AV19Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV20Ano",gxold:"OV20Ano",gxvar:"AV20Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV20Ano,0)},c2v:function(){gx.O.AV20Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTDTFECHCXASBCOS", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFECHCXABCO",gxz:"ZV21DtFechCxaBco",gxold:"OV21DtFechCxaBco",gxvar:"AV21DtFechCxaBco",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DtFechCxaBco=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DtFechCxaBco=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFECHCXABCO",gx.O.AV21DtFechCxaBco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DtFechCxaBco=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFECHCXABCO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TXTDTFECHPAGREC", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFECHPAGREC",gxz:"ZV22DtFechPagRec",gxold:"OV22DtFechPagRec",gxvar:"AV22DtFechPagRec",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DtFechPagRec=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DtFechPagRec=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFECHPAGREC",gx.O.AV22DtFechPagRec,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DtFechPagRec=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFECHPAGREC")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={fld:"JS", format:2,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV39AcessoSistemaSequencia",gxold:"OV39AcessoSistemaSequencia",gxvar:"AV39AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV39AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV39AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.AV19Mes = 0 ;
   this.ZV19Mes = 0 ;
   this.OV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.ZV20Ano = 0 ;
   this.OV20Ano = 0 ;
   this.AV21DtFechCxaBco = gx.date.nullDate() ;
   this.ZV21DtFechCxaBco = gx.date.nullDate() ;
   this.OV21DtFechCxaBco = gx.date.nullDate() ;
   this.AV22DtFechPagRec = gx.date.nullDate() ;
   this.ZV22DtFechPagRec = gx.date.nullDate() ;
   this.OV22DtFechPagRec = gx.date.nullDate() ;
   this.AV39AcessoSistemaSequencia = 0 ;
   this.ZV39AcessoSistemaSequencia = 0 ;
   this.OV39AcessoSistemaSequencia = 0 ;
   this.AV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.AV21DtFechCxaBco = gx.date.nullDate() ;
   this.AV22DtFechPagRec = gx.date.nullDate() ;
   this.AV39AcessoSistemaSequencia = 0 ;
   this.Events = {"e11bm2_client": ["'FECHAR'", true] ,"e13bm2_client": ["'CONFIRMAR'", true] ,"e16bm2_client": ["ENTER", true] ,"e17bm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV19Mes',fld:'vMES'},{av:'AV20Ano',fld:'vANO'},{av:'AV24DtFinImplan',fld:'vDTFINIMPLAN'},{av:'AV37EmpresaPadraoCxaBco',fld:'vEMPRESAPADRAOCXABCO'},{av:'AV21DtFechCxaBco',fld:'vDTFECHCXABCO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV22DtFechPagRec',fld:'vDTFECHPAGREC'},{av:'AV23DtFinAberto',fld:'vDTFINABERTO'}],[{av:'AV30DataAberturaStr',fld:'vDATAABERTURASTR'},{av:'AV31DataAbertura',fld:'vDATAABERTURA'}]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new haberturamescxabco());
