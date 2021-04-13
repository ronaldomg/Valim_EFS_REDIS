/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:42.31
*/
gx.evt.autoSkip = false;
gx.define('hobsaplicacao', false, function () {
   this.ServerClass =  "hobsaplicacao" ;
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
      this.AV28ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
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
   this.e122372_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132372_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152372_client=function()
   {
      this.executeServerEvent("'COPIAOBSSIM'", false, null, false, false);
   };
   this.e172372_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,22,25,29,32];
   this.GXLastCtrlId =32;
   this.PRODUTOOBSERVACAOHTMLContainer = gx.uc.getNew(this, 26, 13, "CKEditorControl", "PRODUTOOBSERVACAOHTMLContainer", "Produtoobservacaohtml");
   var PRODUTOOBSERVACAOHTMLContainer = this.PRODUTOOBSERVACAOHTMLContainer;
   PRODUTOOBSERVACAOHTMLContainer.setProp("Width", "Width", "800", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("Height", "Height", "350", "str");
   PRODUTOOBSERVACAOHTMLContainer.addV2CFunction('AV34ProdutoObservacaoHTML', "vPRODUTOOBSERVACAOHTML", 'SetAttribute');
   PRODUTOOBSERVACAOHTMLContainer.addC2VFunction(function(UC) { UC.ParentObject.AV34ProdutoObservacaoHTML=UC.GetAttribute();gx.fn.setControlValue("vPRODUTOOBSERVACAOHTML",UC.ParentObject.AV34ProdutoObservacaoHTML); });
   PRODUTOOBSERVACAOHTMLContainer.setProp("Skin", "Skin", "silver", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("Toolbar", "Toolbar", "Default", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("CustomToolbar", "Customtoolbar", "", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("CustomConfiguration", "Customconfiguration", "", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("ToolbarCanCollapse", "Toolbarcancollapse", true, "bool");
   PRODUTOOBSERVACAOHTMLContainer.setProp("ToolbarExpanded", "Toolbarexpanded", true, "bool");
   PRODUTOOBSERVACAOHTMLContainer.setProp("Color", "Color", gx.color.fromRGB(211,211,211), "color");
   PRODUTOOBSERVACAOHTMLContainer.setProp("ButtonPressedId", "Buttonpressedid", "", "char");
   PRODUTOOBSERVACAOHTMLContainer.setProp("SdtItemObject", "Prop_sdt_item_object", "", "char");
   PRODUTOOBSERVACAOHTMLContainer.setProp("Dimensions", "Attnumdim", "", "char");
   PRODUTOOBSERVACAOHTMLContainer.setProp("BaseAttType", "Baseatttype", '', "int");
   PRODUTOOBSERVACAOHTMLContainer.setProp("PROP_EXT_BASE_ATT_COLLECTION", "Prop_ext_base_att_collection", false, "boolean");
   PRODUTOOBSERVACAOHTMLContainer.setProp("FieldSpecifier", "Fieldspecifier", "", "char");
   PRODUTOOBSERVACAOHTMLContainer.setProp("CaptionValue", "Captionvalue", "", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("CaptionClass", "Captionclass", "", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("CaptionPosition", "Captionposition", "", "str");
   PRODUTOOBSERVACAOHTMLContainer.setProp("InternalTitle", "Coltitle", "", "char");
   PRODUTOOBSERVACAOHTMLContainer.setProp("TitleFont", "Coltitlefont", "", "char");
   PRODUTOOBSERVACAOHTMLContainer.setProp("TitleForeColor", "Coltitlecolor", '', "int");
   PRODUTOOBSERVACAOHTMLContainer.setProp("UserControlIsColumn", "Usercontroliscolumn", false, "boolean");
   PRODUTOOBSERVACAOHTMLContainer.setDynProp("Visible", "Visible", true, "bool");
   PRODUTOOBSERVACAOHTMLContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   PRODUTOOBSERVACAOHTMLContainer.setProp("Class", "Class", "", "char");
   PRODUTOOBSERVACAOHTMLContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(PRODUTOOBSERVACAOHTMLContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV29ProdutoId",gxold:"OV29ProdutoId",gxvar:"AV29ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV29ProdutoId,0)},c2v:function(){gx.O.AV29ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV30ProdutoDescricaoResumida",gxold:"OV30ProdutoDescricaoResumida",gxvar:"AV30ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV30ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV30ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV30ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOOBSERVACAO",gxz:"ZV31ProdutoObservacao",gxold:"OV31ProdutoObservacao",gxvar:"AV31ProdutoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProdutoObservacao=Value},v2z:function(Value){gx.O.ZV31ProdutoObservacao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOOBSERVACAO",gx.O.AV31ProdutoObservacao,0)},c2v:function(){gx.O.AV31ProdutoObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOAPLICACAO",gxz:"ZV32ProdutoAplicacao",gxold:"OV32ProdutoAplicacao",gxvar:"AV32ProdutoAplicacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ProdutoAplicacao=Value},v2z:function(Value){gx.O.ZV32ProdutoAplicacao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOAPLICACAO",gx.O.AV32ProdutoAplicacao,0)},c2v:function(){gx.O.AV32ProdutoAplicacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOAPLICACAO")},nac:gx.falseFn};
   this.AV29ProdutoId = 0 ;
   this.ZV29ProdutoId = 0 ;
   this.OV29ProdutoId = 0 ;
   this.AV30ProdutoDescricaoResumida = "" ;
   this.ZV30ProdutoDescricaoResumida = "" ;
   this.OV30ProdutoDescricaoResumida = "" ;
   this.AV31ProdutoObservacao = "" ;
   this.ZV31ProdutoObservacao = "" ;
   this.OV31ProdutoObservacao = "" ;
   this.AV32ProdutoAplicacao = "" ;
   this.ZV32ProdutoAplicacao = "" ;
   this.OV32ProdutoAplicacao = "" ;
   this.AV29ProdutoId = 0 ;
   this.AV30ProdutoDescricaoResumida = "" ;
   this.AV31ProdutoObservacao = "" ;
   this.AV34ProdutoObservacaoHTML = "" ;
   this.AV32ProdutoAplicacao = "" ;
   this.AV28ProdutoEmpresaId = "" ;
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3828ProdutoObservacao = "" ;
   this.A3829ProdutoAplicacao = "" ;
   this.A4012ProdutoSimilarEmpId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122372_client": ["ENTER", true] ,"e132372_client": ["'FECHAR'", true] ,"e152372_client": ["'COPIAOBSSIM'", true] ,"e172372_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV28ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'AV31ProdutoObservacao',fld:'vPRODUTOOBSERVACAO'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV29ProdutoId',fld:'vPRODUTOID',hsh:true}],[{av:'AV41GXLvl67',fld:'vGXLVL67'},{av:'gx.fn.getCtrlProperty("vPRODUTOOBSERVACAO","Visible")',ctrl:'vPRODUTOOBSERVACAO',prop:'Visible'},{av:'this.PRODUTOOBSERVACAOHTMLContainer.Visible',ctrl:'vPRODUTOOBSERVACAOHTML',prop:'Visible'},{av:'AV34ProdutoObservacaoHTML',fld:'vPRODUTOOBSERVACAOHTML'},{av:'gx.fn.getCtrlProperty("vPRODUTOOBSERVACAO","Enabled")',ctrl:'vPRODUTOOBSERVACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOAPLICACAO","Enabled")',ctrl:'vPRODUTOAPLICACAO',prop:'Enabled'},{av:'AV31ProdutoObservacao',fld:'vPRODUTOOBSERVACAO'},{av:'AV29ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV28ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true}]];
   this.EvtParms["ENTER"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV28ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'AV34ProdutoObservacaoHTML',fld:'vPRODUTOOBSERVACAOHTML'},{av:'AV29ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV32ProdutoAplicacao',fld:'vPRODUTOAPLICACAO'}],[{av:'AV31ProdutoObservacao',fld:'vPRODUTOOBSERVACAO'},{av:'AV32ProdutoAplicacao',fld:'vPRODUTOAPLICACAO'},{av:'AV29ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV28ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'COPIAOBSSIM'"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV28ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hobsaplicacao());
