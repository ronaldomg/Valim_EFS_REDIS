/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:2.98
*/
gx.evt.autoSkip = false;
gx.define('hmodalinventarioetq', false, function () {
   this.ServerClass =  "hmodalinventarioetq" ;
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
      this.AV42Tela=gx.fn.getControlValue("vTELA") ;
      this.AV44ProdutoIdAux=gx.fn.getIntegerValue("vPRODUTOIDAUX",'.') ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetatermicamodelo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATERMICAMODELO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetatermicaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATERMICAEMPRESAID");
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
   this.e121g92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131g92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151g92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,22,27,29,30,31,32,35,37,40,41,43,45,46,54,55,56,57,58,59,60,61,62,63,66,69,71,72,73,74,82];
   this.GXLastCtrlId =82;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABETQ",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINVENTARIODATA",gxz:"ZV7InventarioData",gxold:"OV7InventarioData",gxvar:"AV7InventarioData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7InventarioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7InventarioData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vINVENTARIODATA",gx.O.AV7InventarioData,0)},c2v:function(){gx.O.AV7InventarioData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vINVENTARIODATA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV8FilialId",gxold:"OV8FilialId",gxvar:"AV8FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV8FilialId,0)},c2v:function(){gx.O.AV8FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV10FilialNome",gxold:"OV10FilialNome",gxvar:"AV10FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FilialNome=Value},v2z:function(Value){gx.O.ZV10FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV10FilialNome,0)},c2v:function(){gx.O.AV10FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatermicamodelo,isvalid:null,rgrid:[],fld:"vETIQUETATERMICAMODELO",gxz:"ZV14EtiquetaTermicaModelo",gxold:"OV14EtiquetaTermicaModelo",gxvar:"AV14EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAMODELO",gx.O.AV14EtiquetaTermicaModelo,0)},c2v:function(){gx.O.AV14EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"P1",grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETATERMICADESCRICAO",gxz:"ZV15EtiquetaTermicaDescricao",gxold:"OV15EtiquetaTermicaDescricao",gxvar:"AV15EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.ZV15EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICADESCRICAO",gx.O.AV15EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.AV15EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatermicaempresaid,isvalid:null,rgrid:[],fld:"vETIQUETATERMICAEMPRESAID",gxz:"ZV16EtiquetaTermicaEmpresaId",gxold:"OV16EtiquetaTermicaEmpresaId",gxvar:"AV16EtiquetaTermicaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EtiquetaTermicaEmpresaId=Value},v2z:function(Value){gx.O.ZV16EtiquetaTermicaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAEMPRESAID",gx.O.AV16EtiquetaTermicaEmpresaId,0)},c2v:function(){gx.O.AV16EtiquetaTermicaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE2",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDINI",gxz:"ZV11ProdutoIdIni",gxold:"OV11ProdutoIdIni",gxvar:"AV11ProdutoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ProdutoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ProdutoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDINI",gx.O.AV11ProdutoIdIni,0)},c2v:function(){gx.O.AV11ProdutoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"P2",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDFIN",gxz:"ZV12ProdutoIdFin",gxold:"OV12ProdutoIdFin",gxvar:"AV12ProdutoIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProdutoIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ProdutoIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDFIN",gx.O.AV12ProdutoIdFin,0)},c2v:function(){gx.O.AV12ProdutoIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"P3",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV33IntAux",gxold:"OV33IntAux",gxvar:"AV33IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV33IntAux,0)},c2v:function(){gx.O.AV33IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV34CharAux",gxold:"OV34CharAux",gxvar:"AV34CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CharAux=Value},v2z:function(Value){gx.O.ZV34CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV34CharAux,0)},c2v:function(){gx.O.AV34CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV35GrupoSub",gxold:"OV35GrupoSub",gxvar:"AV35GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35GrupoSub=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35GrupoSub=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV35GrupoSub,0)},c2v:function(){gx.O.AV35GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODOUT",gxz:"ZV36ProdOut",gxold:"OV36ProdOut",gxvar:"AV36ProdOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ProdOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ProdOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODOUT",gx.O.AV36ProdOut,0)},c2v:function(){gx.O.AV36ProdOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODOUT",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMBINACAO",gxz:"ZV37LoteCombinacao",gxold:"OV37LoteCombinacao",gxvar:"AV37LoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37LoteCombinacao=Value},v2z:function(Value){gx.O.ZV37LoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMBINACAO",gx.O.AV37LoteCombinacao,0)},c2v:function(){gx.O.AV37LoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV38SNVenda",gxold:"OV38SNVenda",gxvar:"AV38SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38SNVenda=Value},v2z:function(Value){gx.O.ZV38SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV38SNVenda,0)},c2v:function(){gx.O.AV38SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV39ProdutoReferencia",gxold:"OV39ProdutoReferencia",gxvar:"AV39ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV39ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV39ProdutoReferencia,0)},c2v:function(){gx.O.AV39ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV40CodigoBarrasProdutoBarra",gxold:"OV40CodigoBarrasProdutoBarra",gxvar:"AV40CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV40CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV40CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABPRD",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV43ProdutoId",gxold:"OV43ProdutoId",gxvar:"AV43ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV43ProdutoId,0)},c2v:function(){gx.O.AV43ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"P4",grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV46ProdutoDescricaoResumida",gxold:"OV46ProdutoDescricaoResumida",gxvar:"AV46ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV46ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV46ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV46ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV47ProdutoEmpresaId",gxold:"OV47ProdutoEmpresaId",gxvar:"AV47ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV47ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV47ProdutoEmpresaId,0)},c2v:function(){gx.O.AV47ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:2,grid:0};
   this.AV7InventarioData = gx.date.nullDate() ;
   this.ZV7InventarioData = gx.date.nullDate() ;
   this.OV7InventarioData = gx.date.nullDate() ;
   this.AV8FilialId = 0 ;
   this.ZV8FilialId = 0 ;
   this.OV8FilialId = 0 ;
   this.AV10FilialNome = "" ;
   this.ZV10FilialNome = "" ;
   this.OV10FilialNome = "" ;
   this.AV14EtiquetaTermicaModelo = 0 ;
   this.ZV14EtiquetaTermicaModelo = 0 ;
   this.OV14EtiquetaTermicaModelo = 0 ;
   this.AV15EtiquetaTermicaDescricao = "" ;
   this.ZV15EtiquetaTermicaDescricao = "" ;
   this.OV15EtiquetaTermicaDescricao = "" ;
   this.AV16EtiquetaTermicaEmpresaId = "" ;
   this.ZV16EtiquetaTermicaEmpresaId = "" ;
   this.OV16EtiquetaTermicaEmpresaId = "" ;
   this.AV11ProdutoIdIni = 0 ;
   this.ZV11ProdutoIdIni = 0 ;
   this.OV11ProdutoIdIni = 0 ;
   this.AV12ProdutoIdFin = 0 ;
   this.ZV12ProdutoIdFin = 0 ;
   this.OV12ProdutoIdFin = 0 ;
   this.AV33IntAux = 0 ;
   this.ZV33IntAux = 0 ;
   this.OV33IntAux = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV34CharAux = "" ;
   this.ZV34CharAux = "" ;
   this.OV34CharAux = "" ;
   this.AV35GrupoSub = 0 ;
   this.ZV35GrupoSub = 0 ;
   this.OV35GrupoSub = 0 ;
   this.AV36ProdOut = 0 ;
   this.ZV36ProdOut = 0 ;
   this.OV36ProdOut = 0 ;
   this.AV37LoteCombinacao = "" ;
   this.ZV37LoteCombinacao = "" ;
   this.OV37LoteCombinacao = "" ;
   this.AV38SNVenda = "" ;
   this.ZV38SNVenda = "" ;
   this.OV38SNVenda = "" ;
   this.AV39ProdutoReferencia = "" ;
   this.ZV39ProdutoReferencia = "" ;
   this.OV39ProdutoReferencia = "" ;
   this.AV40CodigoBarrasProdutoBarra = 0 ;
   this.ZV40CodigoBarrasProdutoBarra = 0 ;
   this.OV40CodigoBarrasProdutoBarra = 0 ;
   this.AV43ProdutoId = 0 ;
   this.ZV43ProdutoId = 0 ;
   this.OV43ProdutoId = 0 ;
   this.AV46ProdutoDescricaoResumida = "" ;
   this.ZV46ProdutoDescricaoResumida = "" ;
   this.OV46ProdutoDescricaoResumida = "" ;
   this.AV47ProdutoEmpresaId = "" ;
   this.ZV47ProdutoEmpresaId = "" ;
   this.OV47ProdutoEmpresaId = "" ;
   this.AV7InventarioData = gx.date.nullDate() ;
   this.AV8FilialId = 0 ;
   this.AV10FilialNome = "" ;
   this.AV14EtiquetaTermicaModelo = 0 ;
   this.AV15EtiquetaTermicaDescricao = "" ;
   this.AV16EtiquetaTermicaEmpresaId = "" ;
   this.AV11ProdutoIdIni = 0 ;
   this.AV12ProdutoIdFin = 0 ;
   this.AV33IntAux = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV34CharAux = "" ;
   this.AV35GrupoSub = 0 ;
   this.AV36ProdOut = 0 ;
   this.AV37LoteCombinacao = "" ;
   this.AV38SNVenda = "" ;
   this.AV39ProdutoReferencia = "" ;
   this.AV40CodigoBarrasProdutoBarra = 0 ;
   this.AV43ProdutoId = 0 ;
   this.AV46ProdutoDescricaoResumida = "" ;
   this.AV47ProdutoEmpresaId = "" ;
   this.AV42Tela = "" ;
   this.AV44ProdutoIdAux = 0 ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e121g92_client": ["ENTER", true] ,"e131g92_client": ["'FECHAR'", true] ,"e151g92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV42Tela',fld:'vTELA',hsh:true},{av:'AV13SNErro',fld:'vSNERRO'},{av:'AV24DataVazia',fld:'vDATAVAZIA'},{av:'AV14EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV16EtiquetaTermicaEmpresaId',fld:'vETIQUETATERMICAEMPRESAID'},{av:'AV19SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA'},{av:'AV20SdtGridFamilia',fld:'vSDTGRIDFAMILIA'},{av:'AV21SdtGridFabricante',fld:'vSDTGRIDFABRICANTE'},{av:'AV22SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA'},{av:'AV23SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA'},{av:'AV8FilialId',fld:'vFILIALID',hsh:true},{av:'AV7InventarioData',fld:'vINVENTARIODATA',hsh:true},{av:'AV25SdtParcelas',fld:'vSDTPARCELAS'},{av:'AV11ProdutoIdIni',fld:'vPRODUTOIDINI'},{av:'AV12ProdutoIdFin',fld:'vPRODUTOIDFIN'},{av:'AV43ProdutoId',fld:'vPRODUTOID'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV26SdtEtiquetaTermica',fld:'vSDTETIQUETATERMICA'},{av:'AV41ParmRelat',fld:'vPARMRELAT'}],[{av:'AV24DataVazia',fld:'vDATAVAZIA'},{av:'AV27SNConteudo',fld:'vSNCONTEUDO'},{av:'AV26SdtEtiquetaTermica',fld:'vSDTETIQUETATERMICA'},{av:'AV13SNErro',fld:'vSNERRO'},{av:'AV53GXLvl136',fld:'vGXLVL136'},{av:'AV29NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV28NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41ParmRelat',fld:'vPARMRELAT'},{av:'AV30NomeProc',fld:'vNOMEPROC'},{av:'AV31Random',fld:'vRANDOM'},{av:'AV32NomeSessao',fld:'vNOMESESSAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("P1", [29]);
   this.setPrompt("P2", [40,57,57,58,59,61,62]);
   this.setPrompt("P3", [45,57,57,58,59,61,62]);
   this.setPrompt("P4", [71,57,57,58,59,61,62]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV42Tela", "vTELA", 0, "char");
   this.setVCMap("AV44ProdutoIdAux", "vPRODUTOIDAUX", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalinventarioetq());
