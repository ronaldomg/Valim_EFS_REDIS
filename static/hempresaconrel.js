/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:9:9.70
*/
gx.evt.autoSkip = false;
gx.define('hempresaconrel', false, function () {
   this.ServerClass =  "hempresaconrel" ;
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
      this.AV10SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV14ProgramaLink=gx.fn.getControlValue("vPROGRAMALINK") ;
   };
   this.Validv_Programaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROGRAMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11zp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12zp2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e13zp2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e14zp2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e17zp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,23,29,36,38,39,40,41,47,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hempresaconrel",[],false,1,true,true,0,true,false,false,"CollSdtEmpresaConRel.SdtEmpresaConRelItem",0,"px","Novo registro",true,false,true,null,null,false,"AV15SdtEmpresaConRel",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("GXV112",38,"CTLSNMARCADO","","","SnMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV113",39,"CTLEMPRESAID","Código","","EmpresaId","char",0,"px",10,10,"left",null,[],"GXV113","GXV113",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV114",40,"CTLEMPRESANOME","Nome da Empresa","","EmpresaNome","svchar",0,"px",40,40,"left",null,[],"GXV114","GXV114",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TXTCLIFOR", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMANOME",gxz:"ZV20SistemaNome",gxold:"OV20SistemaNome",gxvar:"AV20SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SistemaNome=Value},v2z:function(Value){gx.O.ZV20SistemaNome=Value},v2c:function(){gx.fn.setControlValue("vSISTEMANOME",gx.O.AV20SistemaNome,0)},c2v:function(){gx.O.AV20SistemaNome=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMANOME")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TXTCLIFOR1", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE5",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Programaid,isvalid:null,rgrid:[],fld:"vPROGRAMAID",gxz:"ZV18ProgramaId",gxold:"OV18ProgramaId",gxvar:"AV18ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROGRAMAID",gx.O.AV18ProgramaId,0)},c2v:function(){gx.O.AV18ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMANOME",gxz:"ZV19ProgramaNome",gxold:"OV19ProgramaNome",gxvar:"AV19ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProgramaNome=Value},v2z:function(Value){gx.O.ZV19ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("vPROGRAMANOME",gx.O.AV19ProgramaNome,0)},c2v:function(){gx.O.AV19ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMANOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE1",grid:0};
   GXValidFnc[36]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNMARCADO",gxz:"ZV24GXV112",gxold:"OV24GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV112=Value},v2z:function(Value){gx.O.ZV24GXV112=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(37),gx.O.GXV112,"S")},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAID",gxz:"ZV25GXV113",gxold:"OV25GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV113=Value},v2z:function(Value){gx.O.ZV25GXV113=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESAID",row || gx.fn.currentGridRowImpl(37),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESAID",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESANOME",gxz:"ZV26GXV114",gxold:"OV26GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV114=Value},v2z:function(Value){gx.O.ZV26GXV114=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESANOME",row || gx.fn.currentGridRowImpl(37),gx.O.GXV114,0)},c2v:function(){gx.O.GXV114=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESANOME",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[41]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   this.AV20SistemaNome = "" ;
   this.ZV20SistemaNome = "" ;
   this.OV20SistemaNome = "" ;
   this.AV18ProgramaId = 0 ;
   this.ZV18ProgramaId = 0 ;
   this.OV18ProgramaId = 0 ;
   this.AV19ProgramaNome = "" ;
   this.ZV19ProgramaNome = "" ;
   this.OV19ProgramaNome = "" ;
   this.ZV24GXV112 = "" ;
   this.OV24GXV112 = "" ;
   this.ZV25GXV113 = "" ;
   this.OV25GXV113 = "" ;
   this.ZV26GXV114 = "" ;
   this.OV26GXV114 = "" ;
   this.AV20SistemaNome = "" ;
   this.AV18ProgramaId = 0 ;
   this.AV19ProgramaNome = "" ;
   this.AV10SistemaId = "" ;
   this.AV14ProgramaLink = "" ;
   this.GXV112 = "" ;
   this.GXV113 = "" ;
   this.GXV114 = "" ;
   this.A6636EmrpesaConRelEmpresaId = "" ;
   this.A6635EmpresaConRelPrgProgramaId = 0 ;
   this.A6634EmpresaConRelPrgSistemaId = "" ;
   this.A191EmpresaFantasia = "" ;
   this.A186EmpresaNome = "" ;
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.A540SistemaVersao = 0 ;
   this.A539SistemaNome = "" ;
   this.A498ProgramaLink = "" ;
   this.A500ProgramaPrivilegio = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.Events = {"e11zp2_client": ["ENTER", true] ,"e12zp2_client": ["'CANCELAR'", true] ,"e13zp2_client": ["'MARCARTODOS'", true] ,"e14zp2_client": ["'DESMARCARTODOS'", true] ,"e17zp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37},{av:'subGrid_Rows'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37},{av:'AV10SistemaId',fld:'vSISTEMAID',hsh:true},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV28GXV2',fld:'vGXV2'},{av:'AV16SdtEmpresaConRelItem',fld:'vSDTEMPRESACONRELITEM'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SdtEmpresaConRel',fld:'vSDTEMPRESACONREL',grid:37}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR1"];
   this.setVCMap("AV10SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV14ProgramaLink", "vPROGRAMALINK", 0, "svchar");
   this.addGridBCProperty("Sdtempresaconrel", ["SnMarcado"], this.GXValidFnc[38], "AV15SdtEmpresaConRel");
   this.addGridBCProperty("Sdtempresaconrel", ["EmpresaId"], this.GXValidFnc[39], "AV15SdtEmpresaConRel");
   this.addGridBCProperty("Sdtempresaconrel", ["EmpresaNome"], this.GXValidFnc[40], "AV15SdtEmpresaConRel");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hempresaconrel());
