/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:22.31
*/
gx.evt.autoSkip = false;
gx.define('hconfiguratextoemail', false, function () {
   this.ServerClass =  "hconfiguratextoemail" ;
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
   this.e1527b1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmaniversariante",[]), []);
      this.refreshOutputs([]);
   };
   this.e1227b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1327b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1627b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,16,18,21,23];
   this.GXLastCtrlId =23;
   this.MENSAGEMContainer = gx.uc.getNew(this, 8, 0, "CKEditorControl", "MENSAGEMContainer", "Mensagem");
   var MENSAGEMContainer = this.MENSAGEMContainer;
   MENSAGEMContainer.setProp("Width", "Width", "1000", "str");
   MENSAGEMContainer.setProp("Height", "Height", "200", "str");
   MENSAGEMContainer.addV2CFunction('AV10Mensagem', "vMENSAGEM", 'SetAttribute');
   MENSAGEMContainer.addC2VFunction(function(UC) { UC.ParentObject.AV10Mensagem=UC.GetAttribute();gx.fn.setControlValue("vMENSAGEM",UC.ParentObject.AV10Mensagem); });
   MENSAGEMContainer.setProp("Skin", "Skin", "silver", "str");
   MENSAGEMContainer.setProp("Toolbar", "Toolbar", "Default", "str");
   MENSAGEMContainer.setProp("CustomToolbar", "Customtoolbar", "", "str");
   MENSAGEMContainer.setProp("CustomConfiguration", "Customconfiguration", "", "str");
   MENSAGEMContainer.setProp("ToolbarCanCollapse", "Toolbarcancollapse", true, "bool");
   MENSAGEMContainer.setProp("ToolbarExpanded", "Toolbarexpanded", true, "bool");
   MENSAGEMContainer.setProp("Color", "Color", gx.color.fromRGB(211,211,211), "color");
   MENSAGEMContainer.setProp("ButtonPressedId", "Buttonpressedid", "", "char");
   MENSAGEMContainer.setProp("SdtItemObject", "Prop_sdt_item_object", "", "char");
   MENSAGEMContainer.setProp("Dimensions", "Attnumdim", "", "char");
   MENSAGEMContainer.setProp("BaseAttType", "Baseatttype", '', "int");
   MENSAGEMContainer.setProp("PROP_EXT_BASE_ATT_COLLECTION", "Prop_ext_base_att_collection", false, "boolean");
   MENSAGEMContainer.setProp("FieldSpecifier", "Fieldspecifier", "", "char");
   MENSAGEMContainer.setProp("CaptionValue", "Captionvalue", "", "str");
   MENSAGEMContainer.setProp("CaptionClass", "Captionclass", "", "str");
   MENSAGEMContainer.setProp("CaptionPosition", "Captionposition", "", "str");
   MENSAGEMContainer.setProp("InternalTitle", "Coltitle", "", "char");
   MENSAGEMContainer.setProp("TitleFont", "Coltitlefont", "", "char");
   MENSAGEMContainer.setProp("TitleForeColor", "Coltitlecolor", '', "int");
   MENSAGEMContainer.setProp("UserControlIsColumn", "Usercontroliscolumn", false, "boolean");
   MENSAGEMContainer.setProp("Visible", "Visible", true, "bool");
   MENSAGEMContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   MENSAGEMContainer.setProp("Class", "Class", "", "char");
   MENSAGEMContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(MENSAGEMContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={fld:"JS", format:2,grid:0};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[21]={fld:"BTNPARM",grid:0};
   GXValidFnc[23]={fld:"BTNHELP",grid:0};
   this.AV10Mensagem = "" ;
   this.Events = {"e1227b2_client": ["ENTER", true] ,"e1327b2_client": ["'FECHAR'", true] ,"e1627b2_client": ["CANCEL", true] ,"e1527b1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV25Pgmname',fld:'vPGMNAME'},{av:'AV15SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV10Mensagem',fld:'vMENSAGEM'},{av:'AV5Assunto',fld:'vASSUNTO'}],[{av:'AV26GXV1',fld:'vGXV1'},{av:'AV22SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV10Mensagem',fld:'vMENSAGEM'},{av:'AV5Assunto',fld:'vASSUNTO'},{av:'AV20OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfiguratextoemail());
