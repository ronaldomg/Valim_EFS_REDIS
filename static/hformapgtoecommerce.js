/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:34.17
*/
gx.evt.autoSkip = false;
gx.define('hformapgtoecommerce', false, function () {
   this.ServerClass =  "hformapgtoecommerce" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV7FormaPgtoid=gx.fn.getIntegerValue("vFORMAPGTOID",'.') ;
      this.AV9SDTFormasPgtoEco=gx.fn.getControlValue("vSDTFORMASPGTOECO") ;
   };
   this.e112gi2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142gi2_client=function()
   {
      this.executeServerEvent("CTLFORMAPGTOID.CLICK", true, arguments[0], false, false);
   };
   this.e152gi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,13,14];
   this.GXLastCtrlId =14;
   this.Grid2Container = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"hformapgtoecommerce",[],false,1,true,true,0,false,false,false,"CollSDTFormasPgtoEco.SDTFormasPgtoEcoItem",0,"px","Novo registro",false,false,false,null,null,false,"AV9SDTFormasPgtoEco",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("GXV10A",10,"CTLFORMAPGTOECOID","Forma Pgto Eco Id","","FormaPgtoEcoid","svchar",0,"px",40,40,"left",null,[],"GXV10A","GXV10A",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV10B",11,"CTLFORMAPGTOECODESC","Forma Pagamento Loja","","FormaPgtoEcoDesc","svchar",0,"px",60,60,"left",null,[],"GXV10B","GXV10B",true,0,false,false,"Attribute",1,"");
   Grid2Container.addComboBox("GXV10C",12,"CTLFORMAPGTOID","Forma de Pagamento","FormaPgtoid","int","e142gi2_client",0,true,false,0,"px","");
   Grid2Container.addComboBox("GXV10D",13,"CTLTPCOBRFORMAPGTOID","Tipo de Cobrança","TpCobrformapgtoid","int",null,0,true,false,0,"px","");
   this.setGrid(Grid2Container);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[10]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORMAPGTOECOID",gxz:"ZV29GXV10A",gxold:"OV29GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10A=Value},v2z:function(Value){gx.O.ZV29GXV10A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFORMAPGTOECOID",row || gx.fn.currentGridRowImpl(9),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFORMAPGTOECOID",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORMAPGTOECODESC",gxz:"ZV30GXV10B",gxold:"OV30GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10B=Value},v2z:function(Value){gx.O.ZV30GXV10B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFORMAPGTOECODESC",row || gx.fn.currentGridRowImpl(9),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFORMAPGTOECODESC",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:9,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORMAPGTOID",gxz:"ZV31GXV10C",gxold:"OV31GXV10C",gxvar:"GXV10C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV10C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31GXV10C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("CTLFORMAPGTOID",row || gx.fn.currentGridRowImpl(9),gx.O.GXV10C)},c2v:function(){gx.O.GXV10C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFORMAPGTOID",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:9,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTPCOBRFORMAPGTOID",gxz:"ZV32GXV10D",gxold:"OV32GXV10D",gxvar:"GXV10D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV10D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32GXV10D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("CTLTPCOBRFORMAPGTOID",row || gx.fn.currentGridRowImpl(9),gx.O.GXV10D)},c2v:function(){gx.O.GXV10D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTPCOBRFORMAPGTOID",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"DIV2", format:2,grid:0};
   this.ZV29GXV10A = "" ;
   this.OV29GXV10A = "" ;
   this.ZV30GXV10B = "" ;
   this.OV30GXV10B = "" ;
   this.ZV31GXV10C = 0 ;
   this.OV31GXV10C = 0 ;
   this.ZV32GXV10D = 0 ;
   this.OV32GXV10D = 0 ;
   this.GXV10A = "" ;
   this.GXV10B = "" ;
   this.GXV10C = 0 ;
   this.GXV10D = 0 ;
   this.A11691FormaPgtoEcoId = "" ;
   this.A11696FormaPgtoEcoDesc = "" ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3376FormaPgtoId = 0 ;
   this.AV9SDTFormasPgtoEco = [ ] ;
   this.Events = {"e112gi2_client": ["ENTER", true] ,"e142gi2_client": ["CTLFORMAPGTOID.CLICK", true] ,"e152gi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV9SDTFormasPgtoEco',fld:'vSDTFORMASPGTOECO',grid:9}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9SDTFormasPgtoEco',fld:'vSDTFORMASPGTOECO',grid:9},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'}],[{av:'AV9SDTFormasPgtoEco',fld:'vSDTFORMASPGTOECO',grid:9},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'}]];
   this.EvtParms["GRID2.LOAD"] = [[{av:'AV9SDTFormasPgtoEco',fld:'vSDTFORMASPGTOECO',grid:9}],[{av:'AV7FormaPgtoid',fld:'vFORMAPGTOID'}]];
   this.EvtParms["CTLFORMAPGTOID.CLICK"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV9SDTFormasPgtoEco',fld:'vSDTFORMASPGTOECO',grid:9}],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.setVCMap("AV5EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV7FormaPgtoid", "vFORMAPGTOID", 0, "int");
   this.setVCMap("AV9SDTFormasPgtoEco", "vSDTFORMASPGTOECO", 0, "CollSDTFormasPgtoEco.SDTFormasPgtoEcoItem");
   this.setVCMap("AV9SDTFormasPgtoEco", "vSDTFORMASPGTOECO", 0, "CollSDTFormasPgtoEco.SDTFormasPgtoEcoItem");
   Grid2Container.addRefreshingVar({rfrVar:"AV9SDTFormasPgtoEco"});
   this.addGridBCProperty("Sdtformaspgtoeco", ["FormaPgtoEcoid"], this.GXValidFnc[10], "AV9SDTFormasPgtoEco");
   this.addGridBCProperty("Sdtformaspgtoeco", ["FormaPgtoEcoDesc"], this.GXValidFnc[11], "AV9SDTFormasPgtoEco");
   this.addGridBCProperty("Sdtformaspgtoeco", ["FormaPgtoid"], this.GXValidFnc[12], "AV9SDTFormasPgtoEco");
   this.addGridBCProperty("Sdtformaspgtoeco", ["TpCobrformapgtoid"], this.GXValidFnc[13], "AV9SDTFormasPgtoEco");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hformapgtoecommerce());
