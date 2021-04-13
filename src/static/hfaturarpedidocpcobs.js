/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:18:19.15
*/
gx.evt.autoSkip = false;
gx.define('hfaturarpedidocpcobs', false, function () {
   this.ServerClass =  "hfaturarpedidocpcobs" ;
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
   this.e112fp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132fp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152fp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,20,23,25,28,30,33,35,37,40,42,47,49,54,56,61,63,68,70,75,77,79,81,86,89,91];
   this.GXLastCtrlId =91;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRACODIGONOME",gxz:"ZV12ObraCodigoNome",gxold:"OV12ObraCodigoNome",gxvar:"AV12ObraCodigoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ObraCodigoNome=Value},v2z:function(Value){gx.O.ZV12ObraCodigoNome=Value},v2c:function(){gx.fn.setControlValue("vOBRACODIGONOME",gx.O.AV12ObraCodigoNome,0)},c2v:function(){gx.O.AV12ObraCodigoNome=this.val()},val:function(){return gx.fn.getControlValue("vOBRACODIGONOME")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACODIGONOME",gxz:"ZV14PessoaCodigoNome",gxold:"OV14PessoaCodigoNome",gxvar:"AV14PessoaCodigoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PessoaCodigoNome=Value},v2z:function(Value){gx.O.ZV14PessoaCodigoNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOACODIGONOME",gx.O.AV14PessoaCodigoNome,0)},c2v:function(){gx.O.AV14PessoaCodigoNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACODIGONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIE",gxz:"ZV18Serie",gxold:"OV18Serie",gxvar:"AV18Serie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Serie=Value},v2z:function(Value){gx.O.ZV18Serie=Value},v2c:function(){gx.fn.setControlValue("vSERIE",gx.O.AV18Serie,0)},c2v:function(){gx.O.AV18Serie=this.val()},val:function(){return gx.fn.getControlValue("vSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vULTIMANOTA",gxz:"ZV21UltimaNota",gxold:"OV21UltimaNota",gxvar:"AV21UltimaNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21UltimaNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21UltimaNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vULTIMANOTA",gx.O.AV21UltimaNota,0)},c2v:function(){gx.O.AV21UltimaNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vULTIMANOTA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAO",gxz:"ZV5DtEmissao",gxold:"OV5DtEmissao",gxvar:"AV5DtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5DtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV5DtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEMISSAO",gx.O.AV5DtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5DtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"decimal",len:9,dec:3,sign:false,pic:"ZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDETOTCONCRETO",gxz:"ZV16QtdeTotConcreto",gxold:"OV16QtdeTotConcreto",gxvar:"AV16QtdeTotConcreto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16QtdeTotConcreto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV16QtdeTotConcreto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQTDETOTCONCRETO",gx.O.AV16QtdeTotConcreto,3,',')},c2v:function(){gx.O.AV16QtdeTotConcreto=this.val()},val:function(){return gx.fn.getDecimalValue("vQTDETOTCONCRETO",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTOTCONCRETO",gxz:"ZV26VlrTotConcreto",gxold:"OV26VlrTotConcreto",gxvar:"AV26VlrTotConcreto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26VlrTotConcreto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV26VlrTotConcreto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRTOTCONCRETO",gx.O.AV26VlrTotConcreto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26VlrTotConcreto=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRTOTCONCRETO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTAXABOMBA",gxz:"ZV25VlrTaxaBomba",gxold:"OV25VlrTaxaBomba",gxvar:"AV25VlrTaxaBomba",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25VlrTaxaBomba=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25VlrTaxaBomba=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRTAXABOMBA",gx.O.AV25VlrTaxaBomba,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25VlrTaxaBomba=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRTAXABOMBA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"decimal",len:11,dec:2,sign:false,pic:"ZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRM3FALTANTE",gxz:"ZV24VlrM3Faltante",gxold:"OV24VlrM3Faltante",gxvar:"AV24VlrM3Faltante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24VlrM3Faltante=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24VlrM3Faltante=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRM3FALTANTE",gx.O.AV24VlrM3Faltante,2,',')},c2v:function(){gx.O.AV24VlrM3Faltante=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRM3FALTANTE",'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRADICIONAL",gxz:"ZV23VlrAdicional",gxold:"OV23VlrAdicional",gxvar:"AV23VlrAdicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23VlrAdicional=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23VlrAdicional=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRADICIONAL",gx.O.AV23VlrAdicional,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23VlrAdicional=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRADICIONAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[75]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTOTACRDESC",gxz:"ZV30VlrTotAcrDesc",gxold:"OV30VlrTotAcrDesc",gxvar:"AV30VlrTotAcrDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30VlrTotAcrDesc=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV30VlrTotAcrDesc=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRTOTACRDESC",gx.O.AV30VlrTotAcrDesc,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30VlrTotAcrDesc=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRTOTACRDESC",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[79]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTOTFATURA",gxz:"ZV27VlrTotFatura",gxold:"OV27VlrTotFatura",gxvar:"AV27VlrTotFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27VlrTotFatura=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27VlrTotFatura=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRTOTFATURA",gx.O.AV27VlrTotFatura,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27VlrTotFatura=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRTOTFATURA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 81 , function() {
   });
   GXValidFnc[86]={fld:"TABLE6",grid:0};
   GXValidFnc[89]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV13Observacao",gxold:"OV13Observacao",gxvar:"AV13Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Observacao=Value},v2z:function(Value){gx.O.ZV13Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV13Observacao,0)},c2v:function(){gx.O.AV13Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   this.AV12ObraCodigoNome = "" ;
   this.ZV12ObraCodigoNome = "" ;
   this.OV12ObraCodigoNome = "" ;
   this.AV14PessoaCodigoNome = "" ;
   this.ZV14PessoaCodigoNome = "" ;
   this.OV14PessoaCodigoNome = "" ;
   this.AV18Serie = "" ;
   this.ZV18Serie = "" ;
   this.OV18Serie = "" ;
   this.AV21UltimaNota = 0 ;
   this.ZV21UltimaNota = 0 ;
   this.OV21UltimaNota = 0 ;
   this.AV5DtEmissao = gx.date.nullDate() ;
   this.ZV5DtEmissao = gx.date.nullDate() ;
   this.OV5DtEmissao = gx.date.nullDate() ;
   this.AV16QtdeTotConcreto = 0 ;
   this.ZV16QtdeTotConcreto = 0 ;
   this.OV16QtdeTotConcreto = 0 ;
   this.AV26VlrTotConcreto = 0 ;
   this.ZV26VlrTotConcreto = 0 ;
   this.OV26VlrTotConcreto = 0 ;
   this.AV25VlrTaxaBomba = 0 ;
   this.ZV25VlrTaxaBomba = 0 ;
   this.OV25VlrTaxaBomba = 0 ;
   this.AV24VlrM3Faltante = 0 ;
   this.ZV24VlrM3Faltante = 0 ;
   this.OV24VlrM3Faltante = 0 ;
   this.AV23VlrAdicional = 0 ;
   this.ZV23VlrAdicional = 0 ;
   this.OV23VlrAdicional = 0 ;
   this.AV30VlrTotAcrDesc = 0 ;
   this.ZV30VlrTotAcrDesc = 0 ;
   this.OV30VlrTotAcrDesc = 0 ;
   this.AV27VlrTotFatura = 0 ;
   this.ZV27VlrTotFatura = 0 ;
   this.OV27VlrTotFatura = 0 ;
   this.AV13Observacao = "" ;
   this.ZV13Observacao = "" ;
   this.OV13Observacao = "" ;
   this.AV12ObraCodigoNome = "" ;
   this.AV14PessoaCodigoNome = "" ;
   this.AV18Serie = "" ;
   this.AV21UltimaNota = 0 ;
   this.AV5DtEmissao = gx.date.nullDate() ;
   this.AV16QtdeTotConcreto = 0 ;
   this.AV26VlrTotConcreto = 0 ;
   this.AV25VlrTaxaBomba = 0 ;
   this.AV24VlrM3Faltante = 0 ;
   this.AV23VlrAdicional = 0 ;
   this.AV30VlrTotAcrDesc = 0 ;
   this.AV27VlrTotFatura = 0 ;
   this.AV13Observacao = "" ;
   this.Events = {"e112fp2_client": ["'FECHAR'", true] ,"e132fp2_client": ["ENTER", true] ,"e152fp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13Observacao',fld:'vOBSERVACAO'}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfaturarpedidocpcobs());
