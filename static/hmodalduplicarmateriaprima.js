/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:21.36
*/
gx.evt.autoSkip = false;
gx.define('hmodalduplicarmateriaprima', false, function () {
   this.ServerClass =  "hmodalduplicarmateriaprima" ;
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
   this.Validv_Filialidin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALIDIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoidin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOIDIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121ge2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131ge2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151ge2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,29,30,33,34,37,39,40,41,47,48,49,50,51,52,53,54,57,58,59,60];
   this.GXLastCtrlId =60;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialidin,isvalid:null,rgrid:[],fld:"vFILIALIDIN",gxz:"ZV8FilialIdIn",gxold:"OV8FilialIdIn",gxvar:"AV8FilialIdIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FilialIdIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8FilialIdIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDIN",gx.O.AV8FilialIdIn,0)},c2v:function(){gx.O.AV8FilialIdIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDIN",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOMEIN",gxz:"ZV19FilialNomeIn",gxold:"OV19FilialNomeIn",gxvar:"AV19FilialNomeIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FilialNomeIn=Value},v2z:function(Value){gx.O.ZV19FilialNomeIn=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOMEIN",gx.O.AV19FilialNomeIn,0)},c2v:function(){gx.O.AV19FilialNomeIn=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOMEIN")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE8",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoidin,isvalid:null,rgrid:[],fld:"vPRODUTOIDIN",gxz:"ZV9ProdutoIdIn",gxold:"OV9ProdutoIdIn",gxvar:"AV9ProdutoIdIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ProdutoIdIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ProdutoIdIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDIN",gx.O.AV9ProdutoIdIn,0)},c2v:function(){gx.O.AV9ProdutoIdIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDIN",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDAIN",gxz:"ZV20ProdutoDescricaoResumidaIn",gxold:"OV20ProdutoDescricaoResumidaIn",gxvar:"AV20ProdutoDescricaoResumidaIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProdutoDescricaoResumidaIn=Value},v2z:function(Value){gx.O.ZV20ProdutoDescricaoResumidaIn=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDAIN",gx.O.AV20ProdutoDescricaoResumidaIn,0)},c2v:function(){gx.O.AV20ProdutoDescricaoResumidaIn=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDAIN")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE5",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE6",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV15ProdutoId",gxold:"OV15ProdutoId",gxvar:"AV15ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV15ProdutoId,0)},c2v:function(){gx.O.AV15ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV10ProdutoDescricaoResumida",gxold:"OV10ProdutoDescricaoResumida",gxvar:"AV10ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV10ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV10ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV10ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV26ProdutoReferencia",gxold:"OV26ProdutoReferencia",gxvar:"AV26ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV26ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV26ProdutoReferencia,0)},c2v:function(){gx.O.AV26ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRAS",gxz:"ZV27CodigoBarras",gxold:"OV27CodigoBarras",gxvar:"AV27CodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27CodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRAS",gx.O.AV27CodigoBarras,0)},c2v:function(){gx.O.AV27CodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV28SNVenda",gxold:"OV28SNVenda",gxvar:"AV28SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SNVenda=Value},v2z:function(Value){gx.O.ZV28SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV28SNVenda,0)},c2v:function(){gx.O.AV28SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMB",gxz:"ZV25LoteComb",gxold:"OV25LoteComb",gxvar:"AV25LoteComb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25LoteComb=Value},v2z:function(Value){gx.O.ZV25LoteComb=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMB",gx.O.AV25LoteComb,0)},c2v:function(){gx.O.AV25LoteComb=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMB")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODCOD",gxz:"ZV24ProdCod",gxold:"OV24ProdCod",gxvar:"AV24ProdCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ProdCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ProdCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODCOD",gx.O.AV24ProdCod,0)},c2v:function(){gx.O.AV24ProdCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODCOD",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV23GrupoSub",gxold:"OV23GrupoSub",gxvar:"AV23GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23GrupoSub=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23GrupoSub=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV23GrupoSub,0)},c2v:function(){gx.O.AV23GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV12ProdutoEmpresaId",gxold:"OV12ProdutoEmpresaId",gxvar:"AV12ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV12ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV12ProdutoEmpresaId,0)},c2v:function(){gx.O.AV12ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV18QtdeChar",gxold:"OV18QtdeChar",gxvar:"AV18QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV18QtdeChar,0)},c2v:function(){gx.O.AV18QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV22CharAux",gxold:"OV22CharAux",gxvar:"AV22CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CharAux=Value},v2z:function(Value){gx.O.ZV22CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV22CharAux,0)},c2v:function(){gx.O.AV22CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV21IntAux",gxold:"OV21IntAux",gxvar:"AV21IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV21IntAux,0)},c2v:function(){gx.O.AV21IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   this.AV8FilialIdIn = 0 ;
   this.ZV8FilialIdIn = 0 ;
   this.OV8FilialIdIn = 0 ;
   this.AV19FilialNomeIn = "" ;
   this.ZV19FilialNomeIn = "" ;
   this.OV19FilialNomeIn = "" ;
   this.AV9ProdutoIdIn = 0 ;
   this.ZV9ProdutoIdIn = 0 ;
   this.OV9ProdutoIdIn = 0 ;
   this.AV20ProdutoDescricaoResumidaIn = "" ;
   this.ZV20ProdutoDescricaoResumidaIn = "" ;
   this.OV20ProdutoDescricaoResumidaIn = "" ;
   this.AV15ProdutoId = 0 ;
   this.ZV15ProdutoId = 0 ;
   this.OV15ProdutoId = 0 ;
   this.AV10ProdutoDescricaoResumida = "" ;
   this.ZV10ProdutoDescricaoResumida = "" ;
   this.OV10ProdutoDescricaoResumida = "" ;
   this.AV26ProdutoReferencia = "" ;
   this.ZV26ProdutoReferencia = "" ;
   this.OV26ProdutoReferencia = "" ;
   this.AV27CodigoBarras = 0 ;
   this.ZV27CodigoBarras = 0 ;
   this.OV27CodigoBarras = 0 ;
   this.AV28SNVenda = "" ;
   this.ZV28SNVenda = "" ;
   this.OV28SNVenda = "" ;
   this.AV25LoteComb = "" ;
   this.ZV25LoteComb = "" ;
   this.OV25LoteComb = "" ;
   this.AV24ProdCod = 0 ;
   this.ZV24ProdCod = 0 ;
   this.OV24ProdCod = 0 ;
   this.AV23GrupoSub = 0 ;
   this.ZV23GrupoSub = 0 ;
   this.OV23GrupoSub = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV12ProdutoEmpresaId = "" ;
   this.ZV12ProdutoEmpresaId = "" ;
   this.OV12ProdutoEmpresaId = "" ;
   this.AV18QtdeChar = 0 ;
   this.ZV18QtdeChar = 0 ;
   this.OV18QtdeChar = 0 ;
   this.AV22CharAux = "" ;
   this.ZV22CharAux = "" ;
   this.OV22CharAux = "" ;
   this.AV21IntAux = 0 ;
   this.ZV21IntAux = 0 ;
   this.OV21IntAux = 0 ;
   this.AV8FilialIdIn = 0 ;
   this.AV19FilialNomeIn = "" ;
   this.AV9ProdutoIdIn = 0 ;
   this.AV20ProdutoDescricaoResumidaIn = "" ;
   this.AV15ProdutoId = 0 ;
   this.AV10ProdutoDescricaoResumida = "" ;
   this.AV26ProdutoReferencia = "" ;
   this.AV27CodigoBarras = 0 ;
   this.AV28SNVenda = "" ;
   this.AV25LoteComb = "" ;
   this.AV24ProdCod = 0 ;
   this.AV23GrupoSub = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV12ProdutoEmpresaId = "" ;
   this.AV18QtdeChar = 0 ;
   this.AV22CharAux = "" ;
   this.AV21IntAux = 0 ;
   this.A5534MateriaPrimaProdFinalId = 0 ;
   this.A5533MateriaPrimaProdFinalEmpId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e121ge2_client": ["ENTER", true] ,"e131ge2_client": ["'FECHAR'", true] ,"e151ge2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV7SNErro',fld:'vSNERRO'},{av:'AV12ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV9ProdutoIdIn',fld:'vPRODUTOIDIN',hsh:true},{av:'AV15ProdutoId',fld:'vPRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A5533MateriaPrimaProdFinalEmpId',fld:'MATERIAPRIMAPRODFINALEMPID'},{av:'A5534MateriaPrimaProdFinalId',fld:'MATERIAPRIMAPRODFINALID'}],[{av:'AV7SNErro',fld:'vSNERRO'},{av:'AV34GXLvl72',fld:'vGXLVL72'},{av:'AV35GXLvl85',fld:'vGXLVL85'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPTPROD", [39,52,52,51,50,47,48]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalduplicarmateriaprima());
