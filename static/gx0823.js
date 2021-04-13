/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:15.3
*/
gx.evt.autoSkip = false;
gx.define('gx0823', false, function () {
   this.ServerClass =  "gx0823" ;
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
      this.AV10pBancoEmpresaId=gx.fn.getControlValue("vPBANCOEMPRESAID") ;
      this.AV11pBancoId=gx.fn.getIntegerValue("vPBANCOID",'.') ;
      this.AV12pBancoAgenciaId=gx.fn.getIntegerValue("vPBANCOAGENCIAID",'.') ;
      this.AV13pCedenteSequencia=gx.fn.getIntegerValue("vPCEDENTESEQUENCIA",'.') ;
   };
   this.Validv_Ccedentemodeloboleto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCEDENTEMODELOBOLETO");
         this.AnyError  = 0;
         if ( ! ( this.AV7cCedenteModeloBoleto == "" || this.AV7cCedenteModeloBoleto == "1" || this.AV7cCedenteModeloBoleto == "2" || this.AV7cCedenteModeloBoleto == "3" || (""==this.AV7cCedenteModeloBoleto) ) )
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
   this.e132bo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142bo1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0823",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2761,38,"CEDENTESEQUENCIA","Cedente Sequencia","","CedenteSequencia","int",0,"px",4,4,"right",null,[],2761,"CedenteSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1169,39,"CEDENTEMODELOBOLETO","Modelo do Boleto","CedenteModeloBoleto","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1180,40,"CEDENTEBANCOIMPRESSAO","Código de Impressão do Banco","","CedenteBancoImpressao","char",0,"px",6,6,"left",null,[],1180,"CedenteBancoImpressao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1203,41,"CEDENTEESPECIEDOC","Espécie do Documento","","CedenteEspecieDoc","char",0,"px",2,2,"left",null,[],1203,"CedenteEspecieDoc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1222,42,"CEDENTEACEITE","Aceite","","CedenteAceite","char",0,"px",1,1,"left",null,[],1222,"CedenteAceite",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1146,43,"CEDENTEUSOBANCO","Uso do Banco","","CedenteUsoBanco","svchar",0,"px",12,12,"left",null,[],1146,"CedenteUsoBanco",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1247,44,"CEDENTEAGENCIACEDENTEIMPRESSAO","Nº. Agência/ Cód. Cedente","","CedenteAgenciaCedenteImpressao","svchar",0,"px",19,19,"left",null,[],1247,"CedenteAgenciaCedenteImpressao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(950,45,"BANCOEMPRESAID","Empresa","","BancoEmpresaId","char",0,"px",10,10,"left",null,[],950,"BancoEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(947,46,"BANCOID","Código do Banco","","BancoId","int",0,"px",3,3,"right",null,[],947,"BancoId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(953,47,"BANCOAGENCIAID","Agência","","BancoAgenciaId","int",0,"px",4,4,"right",null,[],953,"BancoAgenciaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCEDENTESEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTESEQUENCIA",gxz:"ZV6cCedenteSequencia",gxold:"OV6cCedenteSequencia",gxvar:"AV6cCedenteSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCedenteSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCedenteSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCEDENTESEQUENCIA",gx.O.AV6cCedenteSequencia,0)},c2v:function(){gx.O.AV6cCedenteSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCEDENTESEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCEDENTEMODELOBOLETO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccedentemodeloboleto,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTEMODELOBOLETO",gxz:"ZV7cCedenteModeloBoleto",gxold:"OV7cCedenteModeloBoleto",gxvar:"AV7cCedenteModeloBoleto",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cCedenteModeloBoleto=Value},v2z:function(Value){gx.O.ZV7cCedenteModeloBoleto=Value},v2c:function(){gx.fn.setComboBoxValue("vCCEDENTEMODELOBOLETO",gx.O.AV7cCedenteModeloBoleto)},c2v:function(){gx.O.AV7cCedenteModeloBoleto=this.val()},val:function(){return gx.fn.getControlValue("vCCEDENTEMODELOBOLETO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCEDENTEBANCOIMPRESSAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTEBANCOIMPRESSAO",gxz:"ZV8cCedenteBancoImpressao",gxold:"OV8cCedenteBancoImpressao",gxvar:"AV8cCedenteBancoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCedenteBancoImpressao=Value},v2z:function(Value){gx.O.ZV8cCedenteBancoImpressao=Value},v2c:function(){gx.fn.setControlValue("vCCEDENTEBANCOIMPRESSAO",gx.O.AV8cCedenteBancoImpressao,0)},c2v:function(){gx.O.AV8cCedenteBancoImpressao=this.val()},val:function(){return gx.fn.getControlValue("vCCEDENTEBANCOIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCEDENTELOCALPGMTO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCEDENTELOCALPGMTO",gxz:"ZV9cCedenteLocalPgmto",gxold:"OV9cCedenteLocalPgmto",gxvar:"AV9cCedenteLocalPgmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCedenteLocalPgmto=Value},v2z:function(Value){gx.O.ZV9cCedenteLocalPgmto=Value},v2c:function(){gx.fn.setControlValue("vCCEDENTELOCALPGMTO",gx.O.AV9cCedenteLocalPgmto,0)},c2v:function(){gx.O.AV9cCedenteLocalPgmto=this.val()},val:function(){return gx.fn.getControlValue("vCCEDENTELOCALPGMTO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTESEQUENCIA",gxz:"Z2761CedenteSequencia",gxold:"O2761CedenteSequencia",gxvar:"A2761CedenteSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2761CedenteSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2761CedenteSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CEDENTESEQUENCIA",row || gx.fn.currentGridRowImpl(36),gx.O.A2761CedenteSequencia,0)},c2v:function(){gx.O.A2761CedenteSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CEDENTESEQUENCIA",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEMODELOBOLETO",gxz:"Z1169CedenteModeloBoleto",gxold:"O1169CedenteModeloBoleto",gxvar:"A1169CedenteModeloBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1169CedenteModeloBoleto=Value},v2z:function(Value){gx.O.Z1169CedenteModeloBoleto=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CEDENTEMODELOBOLETO",row || gx.fn.currentGridRowImpl(36),gx.O.A1169CedenteModeloBoleto);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1169CedenteModeloBoleto=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEMODELOBOLETO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:6,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEBANCOIMPRESSAO",gxz:"Z1180CedenteBancoImpressao",gxold:"O1180CedenteBancoImpressao",gxvar:"A1180CedenteBancoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1180CedenteBancoImpressao=Value},v2z:function(Value){gx.O.Z1180CedenteBancoImpressao=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEBANCOIMPRESSAO",row || gx.fn.currentGridRowImpl(36),gx.O.A1180CedenteBancoImpressao,0)},c2v:function(){gx.O.A1180CedenteBancoImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEBANCOIMPRESSAO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEESPECIEDOC",gxz:"Z1203CedenteEspecieDoc",gxold:"O1203CedenteEspecieDoc",gxvar:"A1203CedenteEspecieDoc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1203CedenteEspecieDoc=Value},v2z:function(Value){gx.O.Z1203CedenteEspecieDoc=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEESPECIEDOC",row || gx.fn.currentGridRowImpl(36),gx.O.A1203CedenteEspecieDoc,0)},c2v:function(){gx.O.A1203CedenteEspecieDoc=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEESPECIEDOC",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEACEITE",gxz:"Z1222CedenteAceite",gxold:"O1222CedenteAceite",gxvar:"A1222CedenteAceite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1222CedenteAceite=Value},v2z:function(Value){gx.O.Z1222CedenteAceite=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEACEITE",row || gx.fn.currentGridRowImpl(36),gx.O.A1222CedenteAceite,0)},c2v:function(){gx.O.A1222CedenteAceite=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEACEITE",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:12,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEUSOBANCO",gxz:"Z1146CedenteUsoBanco",gxold:"O1146CedenteUsoBanco",gxvar:"A1146CedenteUsoBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1146CedenteUsoBanco=Value},v2z:function(Value){gx.O.Z1146CedenteUsoBanco=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEUSOBANCO",row || gx.fn.currentGridRowImpl(36),gx.O.A1146CedenteUsoBanco,0)},c2v:function(){gx.O.A1146CedenteUsoBanco=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEUSOBANCO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:19,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEAGENCIACEDENTEIMPRESSAO",gxz:"Z1247CedenteAgenciaCedenteImpressao",gxold:"O1247CedenteAgenciaCedenteImpressao",gxvar:"A1247CedenteAgenciaCedenteImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1247CedenteAgenciaCedenteImpressao=Value},v2z:function(Value){gx.O.Z1247CedenteAgenciaCedenteImpressao=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEAGENCIACEDENTEIMPRESSAO",row || gx.fn.currentGridRowImpl(36),gx.O.A1247CedenteAgenciaCedenteImpressao,0)},c2v:function(){gx.O.A1247CedenteAgenciaCedenteImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEAGENCIACEDENTEIMPRESSAO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOEMPRESAID",gxz:"Z950BancoEmpresaId",gxold:"O950BancoEmpresaId",gxvar:"A950BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A950BancoEmpresaId=Value},v2z:function(Value){gx.O.Z950BancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A950BancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A950BancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOID",row || gx.fn.currentGridRowImpl(36),gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIAID",gxz:"Z953BancoAgenciaId",gxold:"O953BancoAgenciaId",gxvar:"A953BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A953BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z953BancoAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(36),gx.O.A953BancoAgenciaId,0)},c2v:function(){gx.O.A953BancoAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cCedenteSequencia = 0 ;
   this.ZV6cCedenteSequencia = 0 ;
   this.OV6cCedenteSequencia = 0 ;
   this.AV7cCedenteModeloBoleto = "" ;
   this.ZV7cCedenteModeloBoleto = "" ;
   this.OV7cCedenteModeloBoleto = "" ;
   this.AV8cCedenteBancoImpressao = "" ;
   this.ZV8cCedenteBancoImpressao = "" ;
   this.OV8cCedenteBancoImpressao = "" ;
   this.AV9cCedenteLocalPgmto = "" ;
   this.ZV9cCedenteLocalPgmto = "" ;
   this.OV9cCedenteLocalPgmto = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
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
   this.Z1146CedenteUsoBanco = "" ;
   this.O1146CedenteUsoBanco = "" ;
   this.Z1247CedenteAgenciaCedenteImpressao = "" ;
   this.O1247CedenteAgenciaCedenteImpressao = "" ;
   this.Z950BancoEmpresaId = "" ;
   this.O950BancoEmpresaId = "" ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.Z953BancoAgenciaId = 0 ;
   this.O953BancoAgenciaId = 0 ;
   this.AV6cCedenteSequencia = 0 ;
   this.AV7cCedenteModeloBoleto = "" ;
   this.AV8cCedenteBancoImpressao = "" ;
   this.AV9cCedenteLocalPgmto = "" ;
   this.AV10pBancoEmpresaId = "" ;
   this.AV11pBancoId = 0 ;
   this.AV12pBancoAgenciaId = 0 ;
   this.AV13pCedenteSequencia = 0 ;
   this.A1168CedenteLocalPgmto = "" ;
   this.AV5LinkSelection = "" ;
   this.A2761CedenteSequencia = 0 ;
   this.A1169CedenteModeloBoleto = "" ;
   this.A1180CedenteBancoImpressao = "" ;
   this.A1203CedenteEspecieDoc = "" ;
   this.A1222CedenteAceite = "" ;
   this.A1146CedenteUsoBanco = "" ;
   this.A1247CedenteAgenciaCedenteImpressao = "" ;
   this.A950BancoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.A953BancoAgenciaId = 0 ;
   this.Events = {"e132bo2_client": ["ENTER", true] ,"e142bo1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV7cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV8cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV9cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'},{av:'AV10pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true},{av:'AV11pBancoId',fld:'vPBANCOID',hsh:true},{av:'AV12pBancoAgenciaId',fld:'vPBANCOAGENCIAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV13pCedenteSequencia',fld:'vPCEDENTESEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV7cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV8cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV9cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'},{av:'AV10pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true},{av:'AV11pBancoId',fld:'vPBANCOID',hsh:true},{av:'AV12pBancoAgenciaId',fld:'vPBANCOAGENCIAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV7cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV8cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV9cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'},{av:'AV10pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true},{av:'AV11pBancoId',fld:'vPBANCOID',hsh:true},{av:'AV12pBancoAgenciaId',fld:'vPBANCOAGENCIAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV7cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV8cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV9cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'},{av:'AV10pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true},{av:'AV11pBancoId',fld:'vPBANCOID',hsh:true},{av:'AV12pBancoAgenciaId',fld:'vPBANCOAGENCIAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCedenteSequencia',fld:'vCCEDENTESEQUENCIA'},{av:'AV7cCedenteModeloBoleto',fld:'vCCEDENTEMODELOBOLETO'},{av:'AV8cCedenteBancoImpressao',fld:'vCCEDENTEBANCOIMPRESSAO'},{av:'AV9cCedenteLocalPgmto',fld:'vCCEDENTELOCALPGMTO'},{av:'AV10pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true},{av:'AV11pBancoId',fld:'vPBANCOID',hsh:true},{av:'AV12pBancoAgenciaId',fld:'vPBANCOAGENCIAID',hsh:true}],[]];
   this.setVCMap("AV10pBancoEmpresaId", "vPBANCOEMPRESAID", 0, "char");
   this.setVCMap("AV11pBancoId", "vPBANCOID", 0, "int");
   this.setVCMap("AV12pBancoAgenciaId", "vPBANCOAGENCIAID", 0, "int");
   this.setVCMap("AV13pCedenteSequencia", "vPCEDENTESEQUENCIA", 0, "int");
   this.setVCMap("AV10pBancoEmpresaId", "vPBANCOEMPRESAID", 0, "char");
   this.setVCMap("AV11pBancoId", "vPBANCOID", 0, "int");
   this.setVCMap("AV12pBancoAgenciaId", "vPBANCOAGENCIAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pBancoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pBancoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pBancoAgenciaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0823());
