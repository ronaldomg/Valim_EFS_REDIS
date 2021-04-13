/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:4.10
*/
gx.evt.autoSkip = false;
gx.define('hconsultafamilia', false, function () {
   this.ServerClass =  "hconsultafamilia" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV25FamiliaIdIN=gx.fn.getControlValue("vFAMILIAIDIN") ;
      this.AV26SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV19FamiliaId2=gx.fn.getControlValue("vFAMILIAID2") ;
   };
   this.Valid_Setorid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SETORID", gx.fn.currentGridRowImpl(29));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e18n22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n22_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n22_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n22_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n22_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n22_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20n22_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e16n22_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21n22_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23n21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,24,30,31,32,33,34,35,41,44,47,49,51,53,55,56,57,58,59,60,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultafamilia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2957,30,"FAMILIAID","","","FamiliaId","char",0,"px",15,15,"left",null,[],2957,"FamiliaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2951,31,"FAMILIADESCRICAO","","","FamiliaDescricao","svchar",0,"px",30,30,"left",null,[],2951,"FamiliaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2953,32,"SETORID","","","SetorId","char",0,"px",15,15,"left",null,[],2953,"SetorId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2958,33,"SETORDESCRICAO","","","SetorDescricao","svchar",0,"px",30,30,"left",null,[],2958,"SetorDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2956,34,"FAMILIAEMPRESAID","Empresa Família","","FamiliaEmpresaId","char",0,"px",10,10,"left",null,[],2956,"FamiliaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",35,0,"px",17,"px","e20n22_client","","Alterar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFAMILIAID",gxz:"ZV16FamiliaId",gxold:"OV16FamiliaId",gxvar:"AV16FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FamiliaId=Value},v2z:function(Value){gx.O.ZV16FamiliaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV16FamiliaId,0)},c2v:function(){gx.O.AV16FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFAMILIADESCRICAO",gxz:"ZV17FamiliaDescricao",gxold:"OV17FamiliaDescricao",gxvar:"AV17FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FamiliaDescricao=Value},v2z:function(Value){gx.O.ZV17FamiliaDescricao=Value},v2c:function(){gx.fn.setControlValue("vFAMILIADESCRICAO",gx.O.AV17FamiliaDescricao,0)},c2v:function(){gx.O.AV17FamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSETORID",gxz:"ZV18SetorId",gxold:"OV18SetorId",gxvar:"AV18SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SetorId=Value},v2z:function(Value){gx.O.ZV18SetorId=Value},v2c:function(){gx.fn.setControlValue("vSETORID",gx.O.AV18SetorId,0)},c2v:function(){gx.O.AV18SetorId=this.val()},val:function(){return gx.fn.getControlValue("vSETORID")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORDESCRICAO",gxz:"ZV21SetorDescricao",gxold:"OV21SetorDescricao",gxvar:"AV21SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SetorDescricao=Value},v2z:function(Value){gx.O.ZV21SetorDescricao=Value},v2c:function(){gx.fn.setControlValue("vSETORDESCRICAO",gx.O.AV21SetorDescricao,0)},c2v:function(){gx.O.AV21SetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSETORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAID",gxz:"Z2957FamiliaId",gxold:"O2957FamiliaId",gxvar:"A2957FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2957FamiliaId=Value},v2z:function(Value){gx.O.Z2957FamiliaId=Value},v2c:function(row){gx.fn.setGridControlValue("FAMILIAID",row || gx.fn.currentGridRowImpl(29),gx.O.A2957FamiliaId,0)},c2v:function(){gx.O.A2957FamiliaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FAMILIAID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIADESCRICAO",gxz:"Z2951FamiliaDescricao",gxold:"O2951FamiliaDescricao",gxvar:"A2951FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2951FamiliaDescricao=Value},v2z:function(Value){gx.O.Z2951FamiliaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("FAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2951FamiliaDescricao,0)},c2v:function(){gx.O.A2951FamiliaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("FAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Setorid,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2953SetorId=Value},v2z:function(Value){gx.O.Z2953SetorId=Value},v2c:function(row){gx.fn.setGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(29),gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SETORDESCRICAO",gxz:"Z2958SetorDescricao",gxold:"O2958SetorDescricao",gxvar:"A2958SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2958SetorDescricao=Value},v2z:function(Value){gx.O.Z2958SetorDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2958SetorDescricao,0)},c2v:function(){gx.O.A2958SetorDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAEMPRESAID",gxz:"Z2956FamiliaEmpresaId",gxold:"O2956FamiliaEmpresaId",gxvar:"A2956FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2956FamiliaEmpresaId=Value},v2z:function(Value){gx.O.Z2956FamiliaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FAMILIAEMPRESAID",row || gx.fn.currentGridRowImpl(29),gx.O.A2956FamiliaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2956FamiliaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FAMILIAEMPRESAID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV24bmpAlt",gxold:"OV24bmpAlt",gxvar:"AV24bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24bmpAlt=Value},v2z:function(Value){gx.O.ZV24bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(29),gx.O.AV24bmpAlt,gx.O.AV32Bmpalt_GXI)},c2v:function(){gx.O.AV32Bmpalt_GXI=this.val_GXI();gx.O.AV24bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV32Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLENAV",grid:0};
   GXValidFnc[44]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[47]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[49]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[51]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[53]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[55]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV28Pagina",gxold:"OV28Pagina",gxvar:"AV28Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV28Pagina)},c2v:function(){gx.O.AV28Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV29PaginaAux",gxold:"OV29PaginaAux",gxvar:"AV29PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV29PaginaAux,0)},c2v:function(){gx.O.AV29PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSETOREMPRESAID",gxz:"ZV20SetorEmpresaId",gxold:"OV20SetorEmpresaId",gxvar:"AV20SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SetorEmpresaId=Value},v2z:function(Value){gx.O.ZV20SetorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSETOREMPRESAID",gx.O.AV20SetorEmpresaId,0)},c2v:function(){gx.O.AV20SetorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSETOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"JS", format:2,grid:0};
   GXValidFnc[61]={fld:"PROMPT_SETORID",grid:0};
   this.AV16FamiliaId = "" ;
   this.ZV16FamiliaId = "" ;
   this.OV16FamiliaId = "" ;
   this.AV17FamiliaDescricao = "" ;
   this.ZV17FamiliaDescricao = "" ;
   this.OV17FamiliaDescricao = "" ;
   this.AV18SetorId = "" ;
   this.ZV18SetorId = "" ;
   this.OV18SetorId = "" ;
   this.AV21SetorDescricao = "" ;
   this.ZV21SetorDescricao = "" ;
   this.OV21SetorDescricao = "" ;
   this.Z2957FamiliaId = "" ;
   this.O2957FamiliaId = "" ;
   this.Z2951FamiliaDescricao = "" ;
   this.O2951FamiliaDescricao = "" ;
   this.Z2953SetorId = "" ;
   this.O2953SetorId = "" ;
   this.Z2958SetorDescricao = "" ;
   this.O2958SetorDescricao = "" ;
   this.Z2956FamiliaEmpresaId = "" ;
   this.O2956FamiliaEmpresaId = "" ;
   this.ZV24bmpAlt = "" ;
   this.OV24bmpAlt = "" ;
   this.AV28Pagina = 0 ;
   this.ZV28Pagina = 0 ;
   this.OV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.ZV29PaginaAux = 0 ;
   this.OV29PaginaAux = 0 ;
   this.AV20SetorEmpresaId = "" ;
   this.ZV20SetorEmpresaId = "" ;
   this.OV20SetorEmpresaId = "" ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16FamiliaId = "" ;
   this.AV17FamiliaDescricao = "" ;
   this.AV18SetorId = "" ;
   this.AV21SetorDescricao = "" ;
   this.AV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.AV20SetorEmpresaId = "" ;
   this.AV5Orderedby = 0 ;
   this.AV19FamiliaId2 = "" ;
   this.AV25FamiliaIdIN = "" ;
   this.A2952SetorEmpresaId = "" ;
   this.A2957FamiliaId = "" ;
   this.A2951FamiliaDescricao = "" ;
   this.A2953SetorId = "" ;
   this.A2958SetorDescricao = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.AV24bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV26SnParametro = "" ;
   this.Events = {"e18n22_client": ["ENTER", true] ,"e11n22_client": ["'GXM_FIRST'", true] ,"e12n22_client": ["'GXM_PREVIOUS'", true] ,"e13n22_client": ["'GXM_NEXT'", true] ,"e14n22_client": ["'GXM_LAST'", true] ,"e15n22_client": ["'PROCURAR'", true] ,"e20n22_client": ["'ALTERAR'", true] ,"e16n22_client": ["'NOVO'", true] ,"e21n22_client": ["'ATUALIZAPAGINA'", true] ,"e23n21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{ctrl:'FAMILIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FAMILIAID","Title")',ctrl:'FAMILIAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'FAMILIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FAMILIADESCRICAO","Title")',ctrl:'FAMILIADESCRICAO',prop:'Title'},{ctrl:'SETORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SETORID","Title")',ctrl:'SETORID',prop:'Title'},{ctrl:'SETORDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SETORDESCRICAO","Title")',ctrl:'SETORDESCRICAO',prop:'Title'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV27NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'AV19FamiliaId2',fld:'vFAMILIAID2'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV26SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'A2957FamiliaId',fld:'FAMILIAID'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FamiliaId',fld:'vFAMILIAID'},{av:'AV17FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25FamiliaIdIN',fld:'vFAMILIAIDIN',hsh:true},{av:'AV26SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setPrompt("PROMPT_SETORID", [23]);
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25FamiliaIdIN", "vFAMILIAIDIN", 0, "char");
   this.setVCMap("AV26SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV19FamiliaId2", "vFAMILIAID2", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25FamiliaIdIN", "vFAMILIAIDIN", 0, "char");
   this.setVCMap("AV26SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV24bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV24bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV25FamiliaIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV26SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultafamilia());
