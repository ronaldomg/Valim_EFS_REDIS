/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:27.30
*/
gx.evt.autoSkip = false;
gx.define('gx0820', false, function () {
   this.ServerClass =  "gx0820" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pBancoEmpresaId=gx.fn.getControlValue("vPBANCOEMPRESAID") ;
      this.AV14pBancoId=gx.fn.getIntegerValue("vPBANCOID",'.') ;
      this.AV15pBancoAgenciaId=gx.fn.getIntegerValue("vPBANCOAGENCIAID",'.') ;
      this.AV16pCedenteSequencia=gx.fn.getIntegerValue("vPCEDENTESEQUENCIA",'.') ;
   };
   this.Validv_Ccedentemodeloboleto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCEDENTEMODELOBOLETO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cCedenteModeloBoleto == "" || this.AV10cCedenteModeloBoleto == "1" || this.AV10cCedenteModeloBoleto == "2" || this.AV10cCedenteModeloBoleto == "3" || (""==this.AV10cCedenteModeloBoleto) ) )
         {
            try {
               gxballoon.setError("Campo cCedenteModeloBoleto fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e131k72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141k71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0820",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(950,53,"BANCOEMPRESAID","Empresa","","BancoEmpresaId","char",0,"px",10,10,"left",null,[],950,"BancoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(947,54,"BANCOID","Código do Banco","","BancoId","int",0,"px",3,3,"right",null,[],947,"BancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(953,55,"BANCOAGENCIAID","Agência","","BancoAgenciaId","int",0,"px",4,4,"right",null,[],953,"BancoAgenciaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2761,56,"CEDENTESEQUENCIA","Cedente Sequencia","","CedenteSequencia","int",0,"px",4,4,"right",null,[],2761,"CedenteSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1169,57,"CEDENTEMODELOBOLETO","Modelo do Boleto","CedenteModeloBoleto","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1180,58,"CEDENTEBANCOIMPRESSAO","Código de Impressão do Banco","","CedenteBancoImpressao","char",0,"px",6,6,"left",null,[],1180,"CedenteBancoImpressao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1203,59,"CEDENTEESPECIEDOC","Espécie do Documento","","CedenteEspecieDoc","char",0,"px",2,2,"left",null,[],1203,"CedenteEspecieDoc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1222,60,"CEDENTEACEITE","Aceite","","CedenteAceite","char",0,"px",1,1,"left",null,[],1222,"CedenteAceite",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKBANCOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCOEMPRESAID",gxz:"ZV6cBancoEmpresaId",gxold:"OV6cBancoEmpresaId",gxvar:"AV6cBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCBANCOEMPRESAID",gx.O.AV6cBancoEmpresaId,0)},c2v:function(){gx.O.AV6cBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBANCOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCOID",gxz:"ZV7cBancoId",gxold:"OV7cBancoId",gxvar:"AV7cBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOID",gx.O.AV7cBancoId,0)},c2v:function(){gx.O.AV7cBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKBANCOAGENCIAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCOAGENCIAID",gxz:"ZV8cBancoAgenciaId",gxold:"OV8cBancoAgenciaId",gxvar:"AV8cBancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cBancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cBancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOAGENCIAID",gx.O.AV8cBancoAgenciaId,0)},c2v:function(){gx.O.AV8cBancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCEDENTESEQUENCIA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTESEQUENCIA",gxz:"ZV9cCedenteSequencia",gxold:"OV9cCedenteSequencia",gxvar:"AV9cCedenteSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCedenteSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCedenteSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCEDENTESEQUENCIA",gx.O.AV9cCedenteSequencia,0)},c2v:function(){gx.O.AV9cCedenteSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCEDENTESEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCEDENTEMODELOBOLETO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccedentemodeloboleto,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTEMODELOBOLETO",gxz:"ZV10cCedenteModeloBoleto",gxold:"OV10cCedenteModeloBoleto",gxvar:"AV10cCedenteModeloBoleto",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cCedenteModeloBoleto=Value},v2z:function(Value){gx.O.ZV10cCedenteModeloBoleto=Value},v2c:function(){gx.fn.setComboBoxValue("vCCEDENTEMODELOBOLETO",gx.O.AV10cCedenteModeloBoleto)},c2v:function(){gx.O.AV10cCedenteModeloBoleto=this.val()},val:function(){return gx.fn.getControlValue("vCCEDENTEMODELOBOLETO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCEDENTEBANCOIMPRESSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTEBANCOIMPRESSAO",gxz:"ZV11cCedenteBancoImpressao",gxold:"OV11cCedenteBancoImpressao",gxvar:"AV11cCedenteBancoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCedenteBancoImpressao=Value},v2z:function(Value){gx.O.ZV11cCedenteBancoImpressao=Value},v2c:function(){gx.fn.setControlValue("vCCEDENTEBANCOIMPRESSAO",gx.O.AV11cCedenteBancoImpressao,0)},c2v:function(){gx.O.AV11cCedenteBancoImpressao=this.val()},val:function(){return gx.fn.getControlValue("vCCEDENTEBANCOIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCEDENTELOCALPGMTO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTELOCALPGMTO",gxz:"ZV12cCedenteLocalPgmto",gxold:"OV12cCedenteLocalPgmto",gxvar:"AV12cCedenteLocalPgmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCedenteLocalPgmto=Value},v2z:function(Value){gx.O.ZV12cCedenteLocalPgmto=Value},v2c:function(){gx.fn.setControlValue("vCCEDENTELOCALPGMTO",gx.O.AV12cCedenteLocalPgmto,0)},c2v:function(){gx.O.AV12cCedenteLocalPgmto=this.val()},val:function(){return gx.fn.getControlValue("vCCEDENTELOCALPGMTO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOEMPRESAID",gxz:"Z950BancoEmpresaId",gxold:"O950BancoEmpresaId",gxvar:"A950BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A950BancoEmpresaId=Value},v2z:function(Value){gx.O.Z950BancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A950BancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A950BancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOID",row || gx.fn.currentGridRowImpl(51),gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIAID",gxz:"Z953BancoAgenciaId",gxold:"O953BancoAgenciaId",gxvar:"A953BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A953BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z953BancoAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(51),gx.O.A953BancoAgenciaId,0)},c2v:function(){gx.O.A953BancoAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTESEQUENCIA",gxz:"Z2761CedenteSequencia",gxold:"O2761CedenteSequencia",gxvar:"A2761CedenteSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2761CedenteSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2761CedenteSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CEDENTESEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A2761CedenteSequencia,0)},c2v:function(){gx.O.A2761CedenteSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CEDENTESEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEMODELOBOLETO",gxz:"Z1169CedenteModeloBoleto",gxold:"O1169CedenteModeloBoleto",gxvar:"A1169CedenteModeloBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1169CedenteModeloBoleto=Value},v2z:function(Value){gx.O.Z1169CedenteModeloBoleto=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CEDENTEMODELOBOLETO",row || gx.fn.currentGridRowImpl(51),gx.O.A1169CedenteModeloBoleto);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1169CedenteModeloBoleto=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEMODELOBOLETO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:6,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEBANCOIMPRESSAO",gxz:"Z1180CedenteBancoImpressao",gxold:"O1180CedenteBancoImpressao",gxvar:"A1180CedenteBancoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1180CedenteBancoImpressao=Value},v2z:function(Value){gx.O.Z1180CedenteBancoImpressao=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEBANCOIMPRESSAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1180CedenteBancoImpressao,0)},c2v:function(){gx.O.A1180CedenteBancoImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEBANCOIMPRESSAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEESPECIEDOC",gxz:"Z1203CedenteEspecieDoc",gxold:"O1203CedenteEspecieDoc",gxvar:"A1203CedenteEspecieDoc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1203CedenteEspecieDoc=Value},v2z:function(Value){gx.O.Z1203CedenteEspecieDoc=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEESPECIEDOC",row || gx.fn.currentGridRowImpl(51),gx.O.A1203CedenteEspecieDoc,0)},c2v:function(){gx.O.A1203CedenteEspecieDoc=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEESPECIEDOC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEACEITE",gxz:"Z1222CedenteAceite",gxold:"O1222CedenteAceite",gxvar:"A1222CedenteAceite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1222CedenteAceite=Value},v2z:function(Value){gx.O.Z1222CedenteAceite=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEACEITE",row || gx.fn.currentGridRowImpl(51),gx.O.A1222CedenteAceite,0)},c2v:function(){gx.O.A1222CedenteAceite=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEACEITE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cBancoEmpresaId = "" ;
   this.ZV6cBancoEmpresaId = "" ;
   this.OV6cBancoEmpresaId = "" ;
   this.AV7cBancoId = 0 ;
   this.ZV7cBancoId = 0 ;
   this.OV7cBancoId = 0 ;
   this.AV8cBancoAgenciaId = 0 ;
   this.ZV8cBancoAgenciaId = 0 ;
   this.OV8cBancoAgenciaId = 0 ;
   this.AV9cCedenteSequencia = 0 ;
   this.ZV9cCedenteSequencia = 0 ;
   this.OV9cCedenteSequencia = 0 ;
   this.AV10cCedenteModeloBoleto = "" ;
   this.ZV10cCedenteModeloBoleto = "" ;
   this.OV10cCedenteModeloBoleto = "" ;
   this.AV11cCedenteBancoImpressao = "" ;
   this.ZV11cCedenteBancoImpressao = "" ;
   this.OV11cCedenteBancoImpressao = "" ;
   this.AV12cCedenteLocalPgmto = "" ;
   this.ZV12cCedenteLocalPgmto = "" ;
   this.OV12cCedenteLocalPgmto = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z950BancoEmpresaId = "" ;
   this.O950BancoEmpresaId = "" ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.Z953BancoAgenciaId = 0 ;
   this.O953BancoAgenciaId = 0 ;
   this.Z2761CedenteSequencia = 0 ;
   this.O2761CedenteSequencia = 0 ;
   this.Z1169CedenteModeloBoleto = "" ;
   this.O1169CedenteModeloBoleto = "" ;
   this.Z1180CedenteBancoImpressao = "" ;
   this.O1180CedenteBancoImpressao = "" ;
   this.Z1203CedenteEspecieDoc = "" ;
   this.O1203CedenteEspecieDoc = "" ;
   this.Z1222CedenteAceite = "" ;
   this.O1222CedenteAceite = "" ;
   this.AV6cBancoEmpresaId = "" ;
   this.AV7cBancoId = 0 ;
   this.AV8cBancoAgenciaId = 0 ;
   this.AV9cCedenteSequencia = 0 ;
   this.AV10cCedenteModeloBoleto = "" ;
   this.AV11cCedenteBancoImpressao = "" ;
   this.AV12cCedenteLocalPgmto = "" ;
   this.AV13pBancoEmpresaId = "" ;
   this.AV14pBancoId = 0 ;
   this.AV15pBancoAgenciaId = 0 ;
   this.AV16pCedenteSequencia = 0 ;
   this.A1168CedenteLocalPgmto = "" ;
   this.AV5LinkSelection = "" ;
   this.A950BancoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.A953BancoAgenciaId = 0 ;
   this.A2761CedenteSequencia = 0 ;
   this.A1169CedenteModeloBoleto = "" ;
   this.A1180CedenteBancoImpressao = "" ;
   this.A1203CedenteEspecieDoc = "" ;
   this.A1222CedenteAceite = "" ;
   this.Events = {"e131k72_client": ["ENTER", true] ,"e141k71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoEmpresaId',fld:'vCBANCOEMPRESAID'},{av:'AV7cBancoId',fld:'vCBANCOID'},{av:'AV8cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV9cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV10cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV11cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV12cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV13pBancoEmpresaId',fld:'vPBANCOEMPRESAID'},{av:'AV14pBancoId',fld:'vPBANCOID'},{av:'AV15pBancoAgenciaId',fld:'vPBANCOAGENCIAID'},{av:'AV16pCedenteSequencia',fld:'vPCEDENTESEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoEmpresaId',fld:'vCBANCOEMPRESAID'},{av:'AV7cBancoId',fld:'vCBANCOID'},{av:'AV8cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV9cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV10cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV11cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV12cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoEmpresaId',fld:'vCBANCOEMPRESAID'},{av:'AV7cBancoId',fld:'vCBANCOID'},{av:'AV8cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV9cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV10cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV11cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV12cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoEmpresaId',fld:'vCBANCOEMPRESAID'},{av:'AV7cBancoId',fld:'vCBANCOID'},{av:'AV8cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV9cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV10cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV11cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV12cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoEmpresaId',fld:'vCBANCOEMPRESAID'},{av:'AV7cBancoId',fld:'vCBANCOID'},{av:'AV8cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV9cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV10cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV11cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV12cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'}],[]];
   this.setVCMap("AV13pBancoEmpresaId", "vPBANCOEMPRESAID", 0, "char");
   this.setVCMap("AV14pBancoId", "vPBANCOID", 0, "int");
   this.setVCMap("AV15pBancoAgenciaId", "vPBANCOAGENCIAID", 0, "int");
   this.setVCMap("AV16pCedenteSequencia", "vPCEDENTESEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0820());
