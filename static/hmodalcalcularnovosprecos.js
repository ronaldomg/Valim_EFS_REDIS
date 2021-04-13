/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:15:24.24
*/
gx.evt.autoSkip = false;
gx.define('hmodalcalcularnovosprecos', false, function () {
   this.ServerClass =  "hmodalcalcularnovosprecos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV36SNNovaLinha=gx.fn.getControlValue("vSNNOVALINHA") ;
      this.AV39TpErro=gx.fn.getIntegerValue("vTPERRO",'.') ;
      this.AV35snExclui=gx.fn.getControlValue("vSNEXCLUI") ;
      this.AV32SdtPreco=gx.fn.getControlValue("vSDTPRECO") ;
   };
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precobase=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOBASE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1110p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1210p2_client=function()
   {
      this.executeServerEvent("'NOVALINHA'", true, null, false, false);
   };
   this.e1710p2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRID'", true, arguments[0], false, false);
   };
   this.e1310p2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1810p2_client=function()
   {
      this.executeServerEvent("VPRECOID.ISVALID", true, arguments[0], false, false);
   };
   this.e1910p2_client=function()
   {
      this.executeServerEvent("VPRECOBASE.ISVALID", true, arguments[0], false, false);
   };
   this.e2010p2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,13,14,15,16,17,18,19,20,21];
   this.GXLastCtrlId =21;
   this.GridprecoContainer = new gx.grid.grid(this, 2,"WbpLvl2",11,"Gridpreco","Gridpreco","GridprecoContainer",this.CmpContext,this.IsMasterPage,"hmodalcalcularnovosprecos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridprecoContainer = this.GridprecoContainer;
   GridprecoContainer.addSingleLineEdit("Precoid",12,"vPRECOID","Preço","","PrecoId","int",0,"px",2,2,"right",null,[],"Precoid","PrecoId",true,0,false,false,"Attribute",1,"");
   GridprecoContainer.addBitmap("&Promptpreco","vPROMPTPRECO",13,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridprecoContainer.addSingleLineEdit("Precodescricao",14,"vPRECODESCRICAO","Descrição Preço","","PrecoDescricao","svchar",0,"px",30,30,"left",null,[],"Precodescricao","PrecoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridprecoContainer.addSingleLineEdit("Precobase",15,"vPRECOBASE","Preço Base","","PrecoBase","int",0,"px",2,2,"right",null,[],"Precobase","PrecoBase",true,0,false,false,"Attribute",1,"");
   GridprecoContainer.addBitmap("&Promptprecovinc","vPROMPTPRECOVINC",16,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridprecoContainer.addSingleLineEdit("Precobasedescricao",17,"vPRECOBASEDESCRICAO","Descrição Preço Base","","PrecoBaseDescricao","svchar",0,"px",30,30,"left",null,[],"Precobasedescricao","PrecoBaseDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridprecoContainer.addSingleLineEdit("Margem",18,"vMARGEM","Margem","","Margem","decimal",0,"px",10,10,"right",null,[],"Margem","Margem",true,6,false,false,"Attribute",1,"");
   GridprecoContainer.addBitmap("&Excpreco","vEXCPRECO",19,0,"px",17,"px","e1710p2_client","","Exc","Image","GridColumnImage");
   GridprecoContainer.addSingleLineEdit("Controlalinha",20,"vCONTROLALINHA","Controla Linha","","ControlaLinha","int",0,"px",4,4,"right",null,[],"Controlalinha","ControlaLinha",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridprecoContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 29, 12, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"INCLUIPRECO",grid:0};
   GXValidFnc[10]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[12]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:this.Validv_Precoid,isvalid:'e1810p2_client',rgrid:[],fld:"vPRECOID",gxz:"ZV13PrecoId",gxold:"OV13PrecoId",gxvar:"AV13PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PrecoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRECOID",row || gx.fn.currentGridRowImpl(11),gx.O.AV13PrecoId,0)},c2v:function(){gx.O.AV13PrecoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRECOID",row || gx.fn.currentGridRowImpl(11),'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTPRECO",gxz:"ZV15promptPreco",gxold:"OV15promptPreco",gxvar:"AV15promptPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15promptPreco=Value},v2z:function(Value){gx.O.ZV15promptPreco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTPRECO",row || gx.fn.currentGridRowImpl(11),gx.O.AV15promptPreco,gx.O.AV53Promptpreco_GXI)},c2v:function(){gx.O.AV53Promptpreco_GXI=this.val_GXI();gx.O.AV15promptPreco=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTPRECO",row || gx.fn.currentGridRowImpl(11))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTPRECO_GXI",row || gx.fn.currentGridRowImpl(11))}, gxvar_GXI:'AV53Promptpreco_GXI',nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV14PrecoDescricao",gxold:"OV14PrecoDescricao",gxvar:"AV14PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14PrecoDescricao=Value},v2z:function(Value){gx.O.ZV14PrecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRECODESCRICAO",row || gx.fn.currentGridRowImpl(11),gx.O.AV14PrecoDescricao,0)},c2v:function(){gx.O.AV14PrecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRECODESCRICAO",row || gx.fn.currentGridRowImpl(11))},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:this.Validv_Precobase,isvalid:'e1910p2_client',rgrid:[],fld:"vPRECOBASE",gxz:"ZV16PrecoBase",gxold:"OV16PrecoBase",gxvar:"AV16PrecoBase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16PrecoBase=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PrecoBase=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRECOBASE",row || gx.fn.currentGridRowImpl(11),gx.O.AV16PrecoBase,0)},c2v:function(){gx.O.AV16PrecoBase=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRECOBASE",row || gx.fn.currentGridRowImpl(11),'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTPRECOVINC",gxz:"ZV18promptPrecoVinc",gxold:"OV18promptPrecoVinc",gxvar:"AV18promptPrecoVinc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18promptPrecoVinc=Value},v2z:function(Value){gx.O.ZV18promptPrecoVinc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTPRECOVINC",row || gx.fn.currentGridRowImpl(11),gx.O.AV18promptPrecoVinc,gx.O.AV54Promptprecovinc_GXI)},c2v:function(){gx.O.AV54Promptprecovinc_GXI=this.val_GXI();gx.O.AV18promptPrecoVinc=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTPRECOVINC",row || gx.fn.currentGridRowImpl(11))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTPRECOVINC_GXI",row || gx.fn.currentGridRowImpl(11))}, gxvar_GXI:'AV54Promptprecovinc_GXI',nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOBASEDESCRICAO",gxz:"ZV17PrecoBaseDescricao",gxold:"OV17PrecoBaseDescricao",gxvar:"AV17PrecoBaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17PrecoBaseDescricao=Value},v2z:function(Value){gx.O.ZV17PrecoBaseDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRECOBASEDESCRICAO",row || gx.fn.currentGridRowImpl(11),gx.O.AV17PrecoBaseDescricao,0)},c2v:function(){gx.O.AV17PrecoBaseDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRECOBASEDESCRICAO",row || gx.fn.currentGridRowImpl(11))},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"decimal",len:10,dec:6,sign:false,pic:"ZZ9.999999",ro:0,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMARGEM",gxz:"ZV19Margem",gxold:"OV19Margem",gxvar:"AV19Margem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19Margem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19Margem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vMARGEM",row || gx.fn.currentGridRowImpl(11),gx.O.AV19Margem,6,',')},c2v:function(){gx.O.AV19Margem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vMARGEM",row || gx.fn.currentGridRowImpl(11),'.',',')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCPRECO",gxz:"ZV20ExcPreco",gxold:"OV20ExcPreco",gxvar:"AV20ExcPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20ExcPreco=Value},v2z:function(Value){gx.O.ZV20ExcPreco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCPRECO",row || gx.fn.currentGridRowImpl(11),gx.O.AV20ExcPreco,gx.O.AV52Excpreco_GXI)},c2v:function(){gx.O.AV52Excpreco_GXI=this.val_GXI();gx.O.AV20ExcPreco=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCPRECO",row || gx.fn.currentGridRowImpl(11))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCPRECO_GXI",row || gx.fn.currentGridRowImpl(11))}, gxvar_GXI:'AV52Excpreco_GXI',nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:11,gxgrid:this.GridprecoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHA",gxz:"ZV22ControlaLinha",gxold:"OV22ControlaLinha",gxvar:"AV22ControlaLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22ControlaLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ControlaLinha=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHA",row || gx.fn.currentGridRowImpl(11),gx.O.AV22ControlaLinha,0)},c2v:function(){gx.O.AV22ControlaLinha=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHA",row || gx.fn.currentGridRowImpl(11),'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"DIV2", format:2,grid:0};
   this.ZV13PrecoId = 0 ;
   this.OV13PrecoId = 0 ;
   this.ZV15promptPreco = "" ;
   this.OV15promptPreco = "" ;
   this.ZV14PrecoDescricao = "" ;
   this.OV14PrecoDescricao = "" ;
   this.ZV16PrecoBase = 0 ;
   this.OV16PrecoBase = 0 ;
   this.ZV18promptPrecoVinc = "" ;
   this.OV18promptPrecoVinc = "" ;
   this.ZV17PrecoBaseDescricao = "" ;
   this.OV17PrecoBaseDescricao = "" ;
   this.ZV19Margem = 0 ;
   this.OV19Margem = 0 ;
   this.ZV20ExcPreco = "" ;
   this.OV20ExcPreco = "" ;
   this.ZV22ControlaLinha = 0 ;
   this.OV22ControlaLinha = 0 ;
   this.AV13PrecoId = 0 ;
   this.AV15promptPreco = "" ;
   this.AV14PrecoDescricao = "" ;
   this.AV16PrecoBase = 0 ;
   this.AV18promptPrecoVinc = "" ;
   this.AV17PrecoBaseDescricao = "" ;
   this.AV19Margem = 0 ;
   this.AV20ExcPreco = "" ;
   this.AV22ControlaLinha = 0 ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.AV36SNNovaLinha = "" ;
   this.AV39TpErro = 0 ;
   this.AV35snExclui = "" ;
   this.AV32SdtPreco = [ ] ;
   this.Events = {"e1110p2_client": ["'FECHAR'", true] ,"e1210p2_client": ["'NOVALINHA'", true] ,"e1710p2_client": ["'EXCLUILINHAGRID'", true] ,"e1310p2_client": ["ENTER", true] ,"e1810p2_client": ["VPRECOID.ISVALID", true] ,"e1910p2_client": ["VPRECOBASE.ISVALID", true] ,"e2010p2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDPRECO_nFirstRecordOnPage'},{av:'GRIDPRECO_nEOF'},{av:'AV20ExcPreco',fld:'vEXCPRECO',grid:11},{av:'AV15promptPreco',fld:'vPROMPTPRECO',grid:11},{av:'AV18promptPrecoVinc',fld:'vPROMPTPRECOVINC',grid:11},{av:'AV32SdtPreco',fld:'vSDTPRECO'},{av:'AV36SNNovaLinha',fld:'vSNNOVALINHA'},{av:'AV39TpErro',fld:'vTPERRO'},{av:'AV35snExclui',fld:'vSNEXCLUI'},{av:'AV13PrecoId',fld:'vPRECOID',grid:11},{av:'AV14PrecoDescricao',fld:'vPRECODESCRICAO',grid:11},{av:'AV16PrecoBase',fld:'vPRECOBASE',grid:11},{av:'AV17PrecoBaseDescricao',fld:'vPRECOBASEDESCRICAO',grid:11},{av:'AV19Margem',fld:'vMARGEM',grid:11}],[{av:'AV32SdtPreco',fld:'vSDTPRECO'},{av:'AV21Cont',fld:'vCONT'},{av:'AV60GXV2',fld:'vGXV2'},{av:'AV33SdtPrecoItem',fld:'vSDTPRECOITEM'},{av:'AV61GXV3',fld:'vGXV3'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRIDPRECO.LOAD"] = [[{av:'AV32SdtPreco',fld:'vSDTPRECO'}],[{av:'AV22ControlaLinha',fld:'vCONTROLALINHA'},{av:'AV55GXV1',fld:'vGXV1'},{av:'AV33SdtPrecoItem',fld:'vSDTPRECOITEM'},{av:'AV13PrecoId',fld:'vPRECOID'},{av:'AV14PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV16PrecoBase',fld:'vPRECOBASE'},{av:'AV17PrecoBaseDescricao',fld:'vPRECOBASEDESCRICAO'},{av:'AV19Margem',fld:'vMARGEM'}]];
   this.EvtParms["'NOVALINHA'"] = [[{av:'AV13PrecoId',fld:'vPRECOID',grid:11},{av:'AV16PrecoBase',fld:'vPRECOBASE',grid:11},{av:'AV39TpErro',fld:'vTPERRO'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV19Margem',fld:'vMARGEM',grid:11}],[{av:'AV32SdtPreco',fld:'vSDTPRECO'},{av:'AV36SNNovaLinha',fld:'vSNNOVALINHA'},{av:'AV39TpErro',fld:'vTPERRO'},{av:'AV33SdtPrecoItem',fld:'vSDTPRECOITEM'},{av:'AV57GXLvl97',fld:'vGXLVL97'},{av:'AV58GXLvl116',fld:'vGXLVL116'}]];
   this.EvtParms["'EXCLUILINHAGRID'"] = [[{av:'AV22ControlaLinha',fld:'vCONTROLALINHA'}],[{av:'AV32SdtPreco',fld:'vSDTPRECO'},{av:'AV35snExclui',fld:'vSNEXCLUI'}]];
   this.EvtParms["ENTER"] = [[{av:'AV39TpErro',fld:'vTPERRO'},{av:'AV13PrecoId',fld:'vPRECOID',grid:11},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV16PrecoBase',fld:'vPRECOBASE',grid:11},{av:'AV19Margem',fld:'vMARGEM',grid:11},{av:'AV36SNNovaLinha',fld:'vSNNOVALINHA'},{av:'AV35snExclui',fld:'vSNEXCLUI'},{av:'AV14PrecoDescricao',fld:'vPRECODESCRICAO',grid:11},{av:'AV17PrecoBaseDescricao',fld:'vPRECOBASEDESCRICAO',grid:11}],[{av:'AV39TpErro',fld:'vTPERRO'},{av:'AV32SdtPreco',fld:'vSDTPRECO'},{av:'AV57GXLvl97',fld:'vGXLVL97'},{av:'AV58GXLvl116',fld:'vGXLVL116'},{av:'AV21Cont',fld:'vCONT'},{av:'AV60GXV2',fld:'vGXV2'},{av:'AV33SdtPrecoItem',fld:'vSDTPRECOITEM'},{av:'AV61GXV3',fld:'vGXV3'}]];
   this.EvtParms["VPRECOID.ISVALID"] = [[{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'AV13PrecoId',fld:'vPRECOID'}],[{av:'AV14PrecoDescricao',fld:'vPRECODESCRICAO'}]];
   this.EvtParms["VPRECOBASE.ISVALID"] = [[{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'AV16PrecoBase',fld:'vPRECOBASE'}],[{av:'AV17PrecoBaseDescricao',fld:'vPRECOBASEDESCRICAO'}]];
   this.setPrompt("&PROMPTPRECO", [12]);
   this.setPrompt("&PROMPTPRECOVINC", [15]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV36SNNovaLinha", "vSNNOVALINHA", 0, "char");
   this.setVCMap("AV39TpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV35snExclui", "vSNEXCLUI", 0, "char");
   this.setVCMap("AV32SdtPreco", "vSDTPRECO", 0, "CollSdtPreco.SdtPrecoItem");
   this.setVCMap("AV36SNNovaLinha", "vSNNOVALINHA", 0, "char");
   this.setVCMap("AV39TpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV35snExclui", "vSNEXCLUI", 0, "char");
   this.setVCMap("AV32SdtPreco", "vSDTPRECO", 0, "CollSdtPreco.SdtPrecoItem");
   GridprecoContainer.addRefreshingVar({rfrVar:"AV20ExcPreco", rfrProp:"Value", gxAttId:"Excpreco"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV15promptPreco", rfrProp:"Value", gxAttId:"Promptpreco"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV18promptPrecoVinc", rfrProp:"Value", gxAttId:"Promptprecovinc"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV36SNNovaLinha"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV39TpErro"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV35snExclui"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV13PrecoId", rfrProp:"Value", gxAttId:"Precoid"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV14PrecoDescricao", rfrProp:"Value", gxAttId:"Precodescricao"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV16PrecoBase", rfrProp:"Value", gxAttId:"Precobase"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV17PrecoBaseDescricao", rfrProp:"Value", gxAttId:"Precobasedescricao"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV19Margem", rfrProp:"Value", gxAttId:"Margem"});
   GridprecoContainer.addRefreshingVar({rfrVar:"AV32SdtPreco"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcalcularnovosprecos());
