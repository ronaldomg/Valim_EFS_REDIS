/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:35:22.18
*/
gx.evt.autoSkip = false;
gx.define('hselecionatiposaida', false, function () {
   this.ServerClass =  "hselecionatiposaida" ;
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
   this.e15zc1_client=function()
   {
      this.clearMessages();
      this.AV16SnNormal =  "S"  ;
      this.AV17SnCupom =  "S"  ;
      this.AV18SnOrcamento =  "S"  ;
      this.AV19SnCondicional =  "S"  ;
      this.AV20SnEntFutura =  "S"  ;
      this.AV21SnSimplesRem =  "S"  ;
      this.AV22SnTodasPreVendas =  "S"  ;
      this.AV24SnApNaoFaturada =  "S"  ;
      this.refreshOutputs([{av:'AV16SnNormal',fld:'vSNNORMAL'},{av:'AV17SnCupom',fld:'vSNCUPOM'},{av:'AV18SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV19SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV20SnEntFutura',fld:'vSNENTFUTURA'},{av:'AV21SnSimplesRem',fld:'vSNSIMPLESREM'},{av:'AV22SnTodasPreVendas',fld:'vSNTODASPREVENDAS'},{av:'AV24SnApNaoFaturada',fld:'vSNAPNAOFATURADA'}]);
   };
   this.e16zc1_client=function()
   {
      this.clearMessages();
      this.AV16SnNormal =  "N"  ;
      this.AV17SnCupom =  "N"  ;
      this.AV18SnOrcamento =  "N"  ;
      this.AV19SnCondicional =  "N"  ;
      this.AV20SnEntFutura =  "N"  ;
      this.AV21SnSimplesRem =  "N"  ;
      this.AV22SnTodasPreVendas =  "N"  ;
      this.AV24SnApNaoFaturada =  "N"  ;
      this.refreshOutputs([{av:'AV16SnNormal',fld:'vSNNORMAL'},{av:'AV17SnCupom',fld:'vSNCUPOM'},{av:'AV18SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV19SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV20SnEntFutura',fld:'vSNENTFUTURA'},{av:'AV21SnSimplesRem',fld:'vSNSIMPLESREM'},{av:'AV22SnTodasPreVendas',fld:'vSNTODASPREVENDAS'},{av:'AV24SnApNaoFaturada',fld:'vSNAPNAOFATURADA'}]);
   };
   this.e12zc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13zc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17zc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,9,12,15,18,21,24,27,30,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNORMAL",gxz:"ZV16SnNormal",gxold:"OV16SnNormal",gxvar:"AV16SnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16SnNormal=Value},v2z:function(Value){gx.O.ZV16SnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNNORMAL",gx.O.AV16SnNormal,"S")},c2v:function(){gx.O.AV16SnNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONDICIONAL",gxz:"ZV19SnCondicional",gxold:"OV19SnCondicional",gxvar:"AV19SnCondicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19SnCondicional=Value},v2z:function(Value){gx.O.ZV19SnCondicional=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCONDICIONAL",gx.O.AV19SnCondicional,"S")},c2v:function(){gx.O.AV19SnCondicional=this.val()},val:function(){return gx.fn.getControlValue("vSNCONDICIONAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCUPOM",gxz:"ZV17SnCupom",gxold:"OV17SnCupom",gxvar:"AV17SnCupom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SnCupom=Value},v2z:function(Value){gx.O.ZV17SnCupom=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCUPOM",gx.O.AV17SnCupom,"S")},c2v:function(){gx.O.AV17SnCupom=this.val()},val:function(){return gx.fn.getControlValue("vSNCUPOM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNENTFUTURA",gxz:"ZV20SnEntFutura",gxold:"OV20SnEntFutura",gxvar:"AV20SnEntFutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20SnEntFutura=Value},v2z:function(Value){gx.O.ZV20SnEntFutura=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNENTFUTURA",gx.O.AV20SnEntFutura,"S")},c2v:function(){gx.O.AV20SnEntFutura=this.val()},val:function(){return gx.fn.getControlValue("vSNENTFUTURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNORCAMENTO",gxz:"ZV18SnOrcamento",gxold:"OV18SnOrcamento",gxvar:"AV18SnOrcamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18SnOrcamento=Value},v2z:function(Value){gx.O.ZV18SnOrcamento=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNORCAMENTO",gx.O.AV18SnOrcamento,"S")},c2v:function(){gx.O.AV18SnOrcamento=this.val()},val:function(){return gx.fn.getControlValue("vSNORCAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSIMPLESREM",gxz:"ZV21SnSimplesRem",gxold:"OV21SnSimplesRem",gxvar:"AV21SnSimplesRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21SnSimplesRem=Value},v2z:function(Value){gx.O.ZV21SnSimplesRem=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSIMPLESREM",gx.O.AV21SnSimplesRem,"S")},c2v:function(){gx.O.AV21SnSimplesRem=this.val()},val:function(){return gx.fn.getControlValue("vSNSIMPLESREM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTODASPREVENDAS",gxz:"ZV22SnTodasPreVendas",gxold:"OV22SnTodasPreVendas",gxvar:"AV22SnTodasPreVendas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22SnTodasPreVendas=Value},v2z:function(Value){gx.O.ZV22SnTodasPreVendas=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNTODASPREVENDAS",gx.O.AV22SnTodasPreVendas,"S")},c2v:function(){gx.O.AV22SnTodasPreVendas=this.val()},val:function(){return gx.fn.getControlValue("vSNTODASPREVENDAS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAPNAOFATURADA",gxz:"ZV24SnApNaoFaturada",gxold:"OV24SnApNaoFaturada",gxvar:"AV24SnApNaoFaturada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SnApNaoFaturada=Value},v2z:function(Value){gx.O.ZV24SnApNaoFaturada=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAPNAOFATURADA",gx.O.AV24SnApNaoFaturada,"S")},c2v:function(){gx.O.AV24SnApNaoFaturada=this.val()},val:function(){return gx.fn.getControlValue("vSNAPNAOFATURADA")},nac:gx.falseFn,values:['S','N']};
   this.AV16SnNormal = "" ;
   this.ZV16SnNormal = "" ;
   this.OV16SnNormal = "" ;
   this.AV19SnCondicional = "" ;
   this.ZV19SnCondicional = "" ;
   this.OV19SnCondicional = "" ;
   this.AV17SnCupom = "" ;
   this.ZV17SnCupom = "" ;
   this.OV17SnCupom = "" ;
   this.AV20SnEntFutura = "" ;
   this.ZV20SnEntFutura = "" ;
   this.OV20SnEntFutura = "" ;
   this.AV18SnOrcamento = "" ;
   this.ZV18SnOrcamento = "" ;
   this.OV18SnOrcamento = "" ;
   this.AV21SnSimplesRem = "" ;
   this.ZV21SnSimplesRem = "" ;
   this.OV21SnSimplesRem = "" ;
   this.AV22SnTodasPreVendas = "" ;
   this.ZV22SnTodasPreVendas = "" ;
   this.OV22SnTodasPreVendas = "" ;
   this.AV24SnApNaoFaturada = "" ;
   this.ZV24SnApNaoFaturada = "" ;
   this.OV24SnApNaoFaturada = "" ;
   this.AV16SnNormal = "" ;
   this.AV19SnCondicional = "" ;
   this.AV17SnCupom = "" ;
   this.AV20SnEntFutura = "" ;
   this.AV18SnOrcamento = "" ;
   this.AV21SnSimplesRem = "" ;
   this.AV22SnTodasPreVendas = "" ;
   this.AV24SnApNaoFaturada = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A3138TipoPermissaoSnControla = "" ;
   this.Events = {"e12zc2_client": ["ENTER", true] ,"e13zc2_client": ["'FECHAR'", true] ,"e17zc2_client": ["CANCEL", true] ,"e15zc1_client": ["'SELECIONARTODOS'", false] ,"e16zc1_client": ["'DESMARCARTODOS'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16SnNormal',fld:'vSNNORMAL'},{av:'AV17SnCupom',fld:'vSNCUPOM'},{av:'AV18SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV19SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV20SnEntFutura',fld:'vSNENTFUTURA'},{av:'AV21SnSimplesRem',fld:'vSNSIMPLESREM'},{av:'AV22SnTodasPreVendas',fld:'vSNTODASPREVENDAS'},{av:'AV24SnApNaoFaturada',fld:'vSNAPNAOFATURADA'}],[]];
   this.EvtParms["'SELECIONARTODOS'"] = [[],[{av:'AV16SnNormal',fld:'vSNNORMAL'},{av:'AV17SnCupom',fld:'vSNCUPOM'},{av:'AV18SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV19SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV20SnEntFutura',fld:'vSNENTFUTURA'},{av:'AV21SnSimplesRem',fld:'vSNSIMPLESREM'},{av:'AV22SnTodasPreVendas',fld:'vSNTODASPREVENDAS'},{av:'AV24SnApNaoFaturada',fld:'vSNAPNAOFATURADA'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[],[{av:'AV16SnNormal',fld:'vSNNORMAL'},{av:'AV17SnCupom',fld:'vSNCUPOM'},{av:'AV18SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV19SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV20SnEntFutura',fld:'vSNENTFUTURA'},{av:'AV21SnSimplesRem',fld:'vSNSIMPLESREM'},{av:'AV22SnTodasPreVendas',fld:'vSNTODASPREVENDAS'},{av:'AV24SnApNaoFaturada',fld:'vSNAPNAOFATURADA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hselecionatiposaida());
