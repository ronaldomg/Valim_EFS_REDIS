/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:22:34.63
*/
gx.evt.autoSkip=!1;gx.define("testefck",!1,function(){var t,n;this.ServerClass="testefck";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e124g2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e134g2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6];this.GXLastCtrlId=6;this.HTMLContainer=gx.uc.getNew(this,7,0,"CKEditorControl","HTMLContainer","Html");n=this.HTMLContainer;n.setProp("Width","Width","800","str");n.setProp("Height","Height","350","str");n.addV2CFunction("AV5html","vHTML","SetAttribute");n.addC2VFunction(function(n){n.ParentObject.AV5html=n.GetAttribute();gx.fn.setControlValue("vHTML",n.ParentObject.AV5html)});n.setProp("Skin","Skin","silver","str");n.setProp("Toolbar","Toolbar","Default","str");n.setProp("CustomToolbar","Customtoolbar","","str");n.setProp("CustomConfiguration","Customconfiguration","","str");n.setProp("ToolbarCanCollapse","Toolbarcancollapse",!0,"bool");n.setProp("ToolbarExpanded","Toolbarexpanded",!0,"bool");n.setProp("Color","Color",gx.color.fromRGB(211,211,211),"color");n.setProp("ButtonPressedId","Buttonpressedid","","char");n.setProp("SdtItemObject","Prop_sdt_item_object","","char");n.setProp("Dimensions","Attnumdim","","char");n.setProp("BaseAttType","Baseatttype","","int");n.setProp("PROP_EXT_BASE_ATT_COLLECTION","Prop_ext_base_att_collection",!1,"boolean");n.setProp("FieldSpecifier","Fieldspecifier","","char");n.setProp("CaptionValue","Captionvalue","html","str");n.setProp("CaptionClass","Captionclass","col-sm-3 AttributeLabel","str");n.setProp("CaptionPosition","Captionposition","Left","str");n.setProp("InternalTitle","Coltitle","","char");n.setProp("TitleFont","Coltitlefont","","char");n.setProp("TitleForeColor","Coltitlecolor","","int");n.setProp("UserControlIsColumn","Usercontroliscolumn",!1,"boolean");n.setProp("Visible","Visible",!0,"bool");n.setDynProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","","char");n.setC2ShowFunction(function(n){n.show()});this.setUserControl(n);t[2]={fld:"",grid:0};t[3]={fld:"MAINTABLE",grid:0};t[4]={fld:"",grid:0};t[5]={fld:"",grid:0};t[6]={fld:"",grid:0};this.AV5html="";this.Events={e124g2_client:["ENTER",!0],e134g2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.InitStandaloneVars()});gx.setParentObj(new testefck)