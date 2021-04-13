/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:55:20.88
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmimppedido', false, function () {
   this.ServerClass =  "hmodalparmimppedido" ;
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
   this.Validv_Precopadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vFILIALID","Enabled", 0 );
      gx.fn.setCtrlProperty("vPRECOPADRAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNPEDIDOANO","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNPEDSOLICITACAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNAUTORIZACAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNINTEGRACAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vCORABE","Enabled", 0 );
      gx.fn.setCtrlProperty("vCORCANC","Enabled", 0 );
      gx.fn.setCtrlProperty("vCORFEC","Enabled", 0 );
   };
   this.e1214e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1314e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1414e2_client=function()
   {
      this.executeServerEvent("'OBSERVACAO'", true, null, false, false);
   };
   this.e1614e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,7,10,11,14,16,17,20,22,23,26,28,31,33,36,38,41,43,46,48,51,53,56,58,65,66,67,70,72,74,75];
   this.GXLastCtrlId =75;
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TABPAR",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV22Filialid",gxold:"OV22Filialid",gxvar:"AV22Filialid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Filialid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Filialid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV22Filialid,0)},c2v:function(){gx.O.AV22Filialid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV23FilialNome",gxold:"OV23FilialNome",gxvar:"AV23FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialNome=Value},v2z:function(Value){gx.O.ZV23FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV23FilialNome,0)},c2v:function(){gx.O.AV23FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precopadrao,isvalid:null,rgrid:[],fld:"vPRECOPADRAO",gxz:"ZV14PrecoPadrao",gxold:"OV14PrecoPadrao",gxvar:"AV14PrecoPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PrecoPadrao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PrecoPadrao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPADRAO",gx.O.AV14PrecoPadrao,0)},c2v:function(){gx.O.AV14PrecoPadrao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPADRAO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV15PrecoDescricao",gxold:"OV15PrecoDescricao",gxvar:"AV15PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PrecoDescricao=Value},v2z:function(Value){gx.O.ZV15PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV15PrecoDescricao,0)},c2v:function(){gx.O.AV15PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPEDIDOANO",gxz:"ZV24SnPedidoAno",gxold:"OV24SnPedidoAno",gxvar:"AV24SnPedidoAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24SnPedidoAno=Value},v2z:function(Value){gx.O.ZV24SnPedidoAno=Value},v2c:function(){gx.fn.setComboBoxValue("vSNPEDIDOANO",gx.O.AV24SnPedidoAno)},c2v:function(){gx.O.AV24SnPedidoAno=this.val()},val:function(){return gx.fn.getControlValue("vSNPEDIDOANO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPEDSOLICITACAO",gxz:"ZV25SnPedSolicitacao",gxold:"OV25SnPedSolicitacao",gxvar:"AV25SnPedSolicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25SnPedSolicitacao=Value},v2z:function(Value){gx.O.ZV25SnPedSolicitacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSNPEDSOLICITACAO",gx.O.AV25SnPedSolicitacao)},c2v:function(){gx.O.AV25SnPedSolicitacao=this.val()},val:function(){return gx.fn.getControlValue("vSNPEDSOLICITACAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINTEGRACAO",gxz:"ZV26SnIntegracao",gxold:"OV26SnIntegracao",gxvar:"AV26SnIntegracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26SnIntegracao=Value},v2z:function(Value){gx.O.ZV26SnIntegracao=Value},v2c:function(){gx.fn.setComboBoxValue("vSNINTEGRACAO",gx.O.AV26SnIntegracao)},c2v:function(){gx.O.AV26SnIntegracao=this.val()},val:function(){return gx.fn.getControlValue("vSNINTEGRACAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAUTORIZACAO",gxz:"ZV27SnAutorizacao",gxold:"OV27SnAutorizacao",gxvar:"AV27SnAutorizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27SnAutorizacao=Value},v2z:function(Value){gx.O.ZV27SnAutorizacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSNAUTORIZACAO",gx.O.AV27SnAutorizacao)},c2v:function(){gx.O.AV27SnAutorizacao=this.val()},val:function(){return gx.fn.getControlValue("vSNAUTORIZACAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORABE",gxz:"ZV28CorAbe",gxold:"OV28CorAbe",gxvar:"AV28CorAbe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28CorAbe=Value},v2z:function(Value){gx.O.ZV28CorAbe=Value},v2c:function(){gx.fn.setComboBoxValue("vCORABE",gx.O.AV28CorAbe)},c2v:function(){gx.O.AV28CorAbe=this.val()},val:function(){return gx.fn.getControlValue("vCORABE")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORFEC",gxz:"ZV29CorFec",gxold:"OV29CorFec",gxvar:"AV29CorFec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29CorFec=Value},v2z:function(Value){gx.O.ZV29CorFec=Value},v2c:function(){gx.fn.setComboBoxValue("vCORFEC",gx.O.AV29CorFec)},c2v:function(){gx.O.AV29CorFec=this.val()},val:function(){return gx.fn.getControlValue("vCORFEC")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORCANC",gxz:"ZV30CorCanc",gxold:"OV30CorCanc",gxvar:"AV30CorCanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30CorCanc=Value},v2z:function(Value){gx.O.ZV30CorCanc=Value},v2c:function(){gx.fn.setComboBoxValue("vCORCANC",gx.O.AV30CorCanc)},c2v:function(){gx.O.AV30CorCanc=this.val()},val:function(){return gx.fn.getControlValue("vCORCANC")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV31FilialEmpresaId",gxold:"OV31FilialEmpresaId",gxvar:"AV31FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV31FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV31FilialEmpresaId,0)},c2v:function(){gx.O.AV31FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV18PrecoEmpresaId",gxold:"OV18PrecoEmpresaId",gxvar:"AV18PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV18PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV18PrecoEmpresaId,0)},c2v:function(){gx.O.AV18PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV19QtdeCar",gxold:"OV19QtdeCar",gxvar:"AV19QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV19QtdeCar,0)},c2v:function(){gx.O.AV19QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"JS", format:2,grid:0};
   GXValidFnc[72]={fld:"BTNOBS",grid:0};
   GXValidFnc[74]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[75]={fld:"PROMPT_PRECOPADRAO",grid:0};
   this.AV22Filialid = 0 ;
   this.ZV22Filialid = 0 ;
   this.OV22Filialid = 0 ;
   this.AV23FilialNome = "" ;
   this.ZV23FilialNome = "" ;
   this.OV23FilialNome = "" ;
   this.AV14PrecoPadrao = 0 ;
   this.ZV14PrecoPadrao = 0 ;
   this.OV14PrecoPadrao = 0 ;
   this.AV15PrecoDescricao = "" ;
   this.ZV15PrecoDescricao = "" ;
   this.OV15PrecoDescricao = "" ;
   this.AV24SnPedidoAno = "" ;
   this.ZV24SnPedidoAno = "" ;
   this.OV24SnPedidoAno = "" ;
   this.AV25SnPedSolicitacao = "" ;
   this.ZV25SnPedSolicitacao = "" ;
   this.OV25SnPedSolicitacao = "" ;
   this.AV26SnIntegracao = "" ;
   this.ZV26SnIntegracao = "" ;
   this.OV26SnIntegracao = "" ;
   this.AV27SnAutorizacao = "" ;
   this.ZV27SnAutorizacao = "" ;
   this.OV27SnAutorizacao = "" ;
   this.AV28CorAbe = "" ;
   this.ZV28CorAbe = "" ;
   this.OV28CorAbe = "" ;
   this.AV29CorFec = "" ;
   this.ZV29CorFec = "" ;
   this.OV29CorFec = "" ;
   this.AV30CorCanc = "" ;
   this.ZV30CorCanc = "" ;
   this.OV30CorCanc = "" ;
   this.AV31FilialEmpresaId = "" ;
   this.ZV31FilialEmpresaId = "" ;
   this.OV31FilialEmpresaId = "" ;
   this.AV18PrecoEmpresaId = "" ;
   this.ZV18PrecoEmpresaId = "" ;
   this.OV18PrecoEmpresaId = "" ;
   this.AV19QtdeCar = 0 ;
   this.ZV19QtdeCar = 0 ;
   this.OV19QtdeCar = 0 ;
   this.AV22Filialid = 0 ;
   this.AV23FilialNome = "" ;
   this.AV14PrecoPadrao = 0 ;
   this.AV15PrecoDescricao = "" ;
   this.AV24SnPedidoAno = "" ;
   this.AV25SnPedSolicitacao = "" ;
   this.AV26SnIntegracao = "" ;
   this.AV27SnAutorizacao = "" ;
   this.AV28CorAbe = "" ;
   this.AV29CorFec = "" ;
   this.AV30CorCanc = "" ;
   this.AV31FilialEmpresaId = "" ;
   this.AV18PrecoEmpresaId = "" ;
   this.AV19QtdeCar = 0 ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e1214e2_client": ["ENTER", true] ,"e1314e2_client": ["'FECHAR'", true] ,"e1414e2_client": ["'OBSERVACAO'", true] ,"e1614e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12TpErro',fld:'vTPERRO'},{av:'AV14PrecoPadrao',fld:'vPRECOPADRAO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV24SnPedidoAno',fld:'vSNPEDIDOANO'},{av:'AV26SnIntegracao',fld:'vSNINTEGRACAO'},{av:'AV25SnPedSolicitacao',fld:'vSNPEDSOLICITACAO'},{av:'AV28CorAbe',fld:'vCORABE'},{av:'AV29CorFec',fld:'vCORFEC'},{av:'AV30CorCanc',fld:'vCORCANC'},{av:'AV27SnAutorizacao',fld:'vSNAUTORIZACAO'},{av:'AV22Filialid',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV18PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'}],[{av:'AV13ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV24SnPedidoAno',fld:'vSNPEDIDOANO'},{av:'AV26SnIntegracao',fld:'vSNINTEGRACAO'},{av:'AV25SnPedSolicitacao',fld:'vSNPEDSOLICITACAO'},{av:'AV28CorAbe',fld:'vCORABE'},{av:'AV29CorFec',fld:'vCORFEC'},{av:'AV30CorCanc',fld:'vCORCANC'},{av:'AV27SnAutorizacao',fld:'vSNAUTORIZACAO'},{av:'AV12TpErro',fld:'vTPERRO'},{av:'AV37GXLvl111',fld:'vGXLVL111'},{av:'AV23FilialNome',fld:'vFILIALNOME'},{av:'AV38GXLvl129',fld:'vGXLVL129'},{av:'AV15PrecoDescricao',fld:'vPRECODESCRICAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[],[]];
   this.setPrompt("PROMPT_FILIALID", [16]);
   this.setPrompt("PROMPT_PRECOPADRAO", [22]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmimppedido());
