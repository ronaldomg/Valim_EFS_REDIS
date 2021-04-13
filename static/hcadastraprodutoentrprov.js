/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:39.5
*/
gx.evt.autoSkip = false;
gx.define('hcadastraprodutoentrprov', false, function () {
   this.ServerClass =  "hcadastraprodutoentrprov" ;
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
      this.AV28EntradaProvEmpresaId=gx.fn.getControlValue("vENTRADAPROVEMPRESAID") ;
      this.AV27EntradaProvId=gx.fn.getIntegerValue("vENTRADAPROVID",'.') ;
      this.AV29EntradaProvItemSequencia=gx.fn.getIntegerValue("vENTRADAPROVITEMSEQUENCIA",'.') ;
   };
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
   this.e122332_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132332_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142332_client=function()
   {
      this.executeServerEvent("VPRODUTOID.ISVALID", true, null, false, true);
   };
   this.e162332_client=function()
   {
      this.executeServerEvent("'CONSULTARPRODUTO'", true, null, false, false);
   };
   this.e172332_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,20,23,24,25,26,27,28,29,30,31,32];
   this.GXLastCtrlId =32;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:'e142332_client',rgrid:[],fld:"vPRODUTOID",gxz:"ZV14ProdutoId",gxold:"OV14ProdutoId",gxvar:"AV14ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV14ProdutoId,0)},c2v:function(){gx.O.AV14ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"BMPPROMPTPROD",grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV15ProdutoDescricaoResumida",gxold:"OV15ProdutoDescricaoResumida",gxvar:"AV15ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV15ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV15ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV15ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMVAZIO",gxz:"ZV16NumVazio",gxold:"OV16NumVazio",gxvar:"AV16NumVazio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16NumVazio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16NumVazio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMVAZIO",gx.O.AV16NumVazio,0)},c2v:function(){gx.O.AV16NumVazio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMVAZIO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARVAZIO",gxz:"ZV17CharVazio",gxold:"OV17CharVazio",gxvar:"AV17CharVazio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CharVazio=Value},v2z:function(Value){gx.O.ZV17CharVazio=Value},v2c:function(){gx.fn.setControlValue("vCHARVAZIO",gx.O.AV17CharVazio,0)},c2v:function(){gx.O.AV17CharVazio=this.val()},val:function(){return gx.fn.getControlValue("vCHARVAZIO")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV18GrupoSub",gxold:"OV18GrupoSub",gxvar:"AV18GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18GrupoSub=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18GrupoSub=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV18GrupoSub,0)},c2v:function(){gx.O.AV18GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMBINACAO",gxz:"ZV20LoteCombinacao",gxold:"OV20LoteCombinacao",gxvar:"AV20LoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LoteCombinacao=Value},v2z:function(Value){gx.O.ZV20LoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMBINACAO",gx.O.AV20LoteCombinacao,0)},c2v:function(){gx.O.AV20LoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV21CodigoBarrasProdutoBarra",gxold:"OV21CodigoBarrasProdutoBarra",gxvar:"AV21CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV21CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV21CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV24FilialId",gxold:"OV24FilialId",gxvar:"AV24FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV24FilialId,0)},c2v:function(){gx.O.AV24FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV22ProdutoReferencia",gxold:"OV22ProdutoReferencia",gxvar:"AV22ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV22ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV22ProdutoReferencia,0)},c2v:function(){gx.O.AV22ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV23SNVenda",gxold:"OV23SNVenda",gxvar:"AV23SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23SNVenda=Value},v2z:function(Value){gx.O.ZV23SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV23SNVenda,0)},c2v:function(){gx.O.AV23SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMVAZIO",gxz:"ZV16NumVazio",gxold:"OV16NumVazio",gxvar:"AV16NumVazio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16NumVazio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16NumVazio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMVAZIO",gx.O.AV16NumVazio,0)},c2v:function(){gx.O.AV16NumVazio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMVAZIO",'.')},nac:gx.falseFn};
   this.AV14ProdutoId = 0 ;
   this.ZV14ProdutoId = 0 ;
   this.OV14ProdutoId = 0 ;
   this.AV15ProdutoDescricaoResumida = "" ;
   this.ZV15ProdutoDescricaoResumida = "" ;
   this.OV15ProdutoDescricaoResumida = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV16NumVazio = 0 ;
   this.ZV16NumVazio = 0 ;
   this.OV16NumVazio = 0 ;
   this.AV17CharVazio = "" ;
   this.ZV17CharVazio = "" ;
   this.OV17CharVazio = "" ;
   this.AV18GrupoSub = 0 ;
   this.ZV18GrupoSub = 0 ;
   this.OV18GrupoSub = 0 ;
   this.AV20LoteCombinacao = "" ;
   this.ZV20LoteCombinacao = "" ;
   this.OV20LoteCombinacao = "" ;
   this.AV21CodigoBarrasProdutoBarra = 0 ;
   this.ZV21CodigoBarrasProdutoBarra = 0 ;
   this.OV21CodigoBarrasProdutoBarra = 0 ;
   this.AV24FilialId = 0 ;
   this.ZV24FilialId = 0 ;
   this.OV24FilialId = 0 ;
   this.AV22ProdutoReferencia = "" ;
   this.ZV22ProdutoReferencia = "" ;
   this.OV22ProdutoReferencia = "" ;
   this.AV23SNVenda = "" ;
   this.ZV23SNVenda = "" ;
   this.OV23SNVenda = "" ;
   this.AV14ProdutoId = 0 ;
   this.AV15ProdutoDescricaoResumida = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV16NumVazio = 0 ;
   this.AV17CharVazio = "" ;
   this.AV18GrupoSub = 0 ;
   this.AV20LoteCombinacao = "" ;
   this.AV21CodigoBarrasProdutoBarra = 0 ;
   this.AV24FilialId = 0 ;
   this.AV22ProdutoReferencia = "" ;
   this.AV23SNVenda = "" ;
   this.AV28EntradaProvEmpresaId = "" ;
   this.AV27EntradaProvId = 0 ;
   this.AV29EntradaProvItemSequencia = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.Events = {"e122332_client": ["ENTER", true] ,"e132332_client": ["'FECHAR'", true] ,"e142332_client": ["VPRODUTOID.ISVALID", true] ,"e162332_client": ["'CONSULTARPRODUTO'", true] ,"e172332_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14ProdutoId',fld:'vPRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV28EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV27EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV29EntradaProvItemSequencia',fld:'vENTRADAPROVITEMSEQUENCIA',hsh:true}],[{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV33GXLvl22',fld:'vGXLVL22'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VPRODUTOID.ISVALID"] = [[{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV14ProdutoId',fld:'vPRODUTOID'}],[{av:'AV15ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'CONSULTARPRODUTO'"] = [[{av:'AV24FilialId',fld:'vFILIALID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV17CharVazio',fld:'vCHARVAZIO'},{av:'AV16NumVazio',fld:'vNUMVAZIO'},{av:'AV23SNVenda',fld:'vSNVENDA'}],[{av:'AV21CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'},{av:'AV22ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV20LoteCombinacao',fld:'vLOTECOMBINACAO'},{av:'AV18GrupoSub',fld:'vGRUPOSUB'},{av:'AV14ProdutoId',fld:'vPRODUTOID'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV28EntradaProvEmpresaId", "vENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV27EntradaProvId", "vENTRADAPROVID", 0, "int");
   this.setVCMap("AV29EntradaProvItemSequencia", "vENTRADAPROVITEMSEQUENCIA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastraprodutoentrprov());
