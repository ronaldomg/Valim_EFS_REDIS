/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:42.58
*/
gx.evt.autoSkip = false;
gx.define('hconsultacedente', false, function () {
   this.ServerClass =  "hconsultacedente" ;
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
      this.AV19BancoId=gx.fn.getIntegerValue("vBANCOID",'.') ;
      this.AV18BancoAgenciaId=gx.fn.getIntegerValue("vBANCOAGENCIAID",'.') ;
      this.AV22CedenteSequencia=gx.fn.getIntegerValue("vCEDENTESEQUENCIA",'.') ;
   };
   this.Valid_Bancoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(33) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BANCOID", gx.fn.currentGridRowImpl(33));
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
   this.Valid_Bancoagenciaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(33) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BANCOAGENCIAID", gx.fn.currentGridRowImpl(33));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e178l2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e118l2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e128l2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e138l2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e148l2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e158l2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e198l2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e218l1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,36,37,38,39,45,48,50,52,54,56,57,58,59];
   this.GXLastCtrlId =59;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacedente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2772,34,"CEDENTENOCONTA","","","CedenteNoConta","int",0,"px",12,12,"right",null,[],2772,"CedenteNoConta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1179,35,"CEDENTEDESCRICAO","","","CedenteDescricao","svchar",0,"px",70,70,"left",null,[],1179,"CedenteDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(947,36,"BANCOID","","","BancoId","int",0,"px",3,3,"right",null,[],947,"BancoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(948,37,"BANCONOME","","","BancoNome","svchar",0,"px",25,25,"left",null,[],948,"BancoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(953,38,"BANCOAGENCIAID","","","BancoAgenciaId","int",0,"px",4,4,"right",null,[],953,"BancoAgenciaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(954,39,"BANCOAGENCIANOME","","","BancoAgenciaNome","svchar",0,"px",40,40,"left",null,[],954,"BancoAgenciaNome",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCBANCOID",gxz:"ZV15cBancoId",gxold:"OV15cBancoId",gxvar:"AV15cBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15cBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOID",gx.O.AV15cBancoId,0)},c2v:function(){gx.O.AV15cBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCBANCOAGENCIAID",gxz:"ZV16cBancoAgenciaId",gxold:"OV16cBancoAgenciaId",gxvar:"AV16cBancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cBancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16cBancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOAGENCIAID",gx.O.AV16cBancoAgenciaId,0)},c2v:function(){gx.O.AV16cBancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCCEDENTENOCONTA",gxz:"ZV21cCedenteNoConta",gxold:"OV21cCedenteNoConta",gxvar:"AV21cCedenteNoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21cCedenteNoConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21cCedenteNoConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCEDENTENOCONTA",gx.O.AV21cCedenteNoConta,0)},c2v:function(){gx.O.AV21cCedenteNoConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCEDENTENOCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCCEDENTEDESCRICAO",gxz:"ZV17cCedenteDescricao",gxold:"OV17cCedenteDescricao",gxvar:"AV17cCedenteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cCedenteDescricao=Value},v2z:function(Value){gx.O.ZV17cCedenteDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCEDENTEDESCRICAO",gx.O.AV17cCedenteDescricao,0)},c2v:function(){gx.O.AV17cCedenteDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCEDENTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTENOCONTA",gxz:"Z2772CedenteNoConta",gxold:"O2772CedenteNoConta",gxvar:"A2772CedenteNoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2772CedenteNoConta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2772CedenteNoConta=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CEDENTENOCONTA",row || gx.fn.currentGridRowImpl(33),gx.O.A2772CedenteNoConta,0)},c2v:function(){gx.O.A2772CedenteNoConta=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CEDENTENOCONTA",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEDESCRICAO",gxz:"Z1179CedenteDescricao",gxold:"O1179CedenteDescricao",gxvar:"A1179CedenteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1179CedenteDescricao=Value},v2z:function(Value){gx.O.Z1179CedenteDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEDESCRICAO",row || gx.fn.currentGridRowImpl(33),gx.O.A1179CedenteDescricao,0)},c2v:function(){gx.O.A1179CedenteDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEDESCRICAO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:this.Valid_Bancoid,isvalid:null,rgrid:[],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOID",row || gx.fn.currentGridRowImpl(33),gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOID",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCONOME",gxz:"Z948BancoNome",gxold:"O948BancoNome",gxvar:"A948BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A948BancoNome=Value},v2z:function(Value){gx.O.Z948BancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(33),gx.O.A948BancoNome,0)},c2v:function(){gx.O.A948BancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:this.Valid_Bancoagenciaid,isvalid:null,rgrid:[],fld:"BANCOAGENCIAID",gxz:"Z953BancoAgenciaId",gxold:"O953BancoAgenciaId",gxvar:"A953BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A953BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z953BancoAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(33),gx.O.A953BancoAgenciaId,0)},c2v:function(){gx.O.A953BancoAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIANOME",gxz:"Z954BancoAgenciaNome",gxold:"O954BancoAgenciaNome",gxvar:"A954BancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A954BancoAgenciaNome=Value},v2z:function(Value){gx.O.Z954BancoAgenciaNome=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIANOME",row || gx.fn.currentGridRowImpl(33),gx.O.A954BancoAgenciaNome,0)},c2v:function(){gx.O.A954BancoAgenciaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOAGENCIANOME",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLENAV",grid:0};
   GXValidFnc[48]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[50]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[52]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[54]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[56]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15cBancoId = 0 ;
   this.ZV15cBancoId = 0 ;
   this.OV15cBancoId = 0 ;
   this.AV16cBancoAgenciaId = 0 ;
   this.ZV16cBancoAgenciaId = 0 ;
   this.OV16cBancoAgenciaId = 0 ;
   this.AV21cCedenteNoConta = 0 ;
   this.ZV21cCedenteNoConta = 0 ;
   this.OV21cCedenteNoConta = 0 ;
   this.AV17cCedenteDescricao = "" ;
   this.ZV17cCedenteDescricao = "" ;
   this.OV17cCedenteDescricao = "" ;
   this.Z2772CedenteNoConta = 0 ;
   this.O2772CedenteNoConta = 0 ;
   this.Z1179CedenteDescricao = "" ;
   this.O1179CedenteDescricao = "" ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.Z948BancoNome = "" ;
   this.O948BancoNome = "" ;
   this.Z953BancoAgenciaId = 0 ;
   this.O953BancoAgenciaId = 0 ;
   this.Z954BancoAgenciaNome = "" ;
   this.O954BancoAgenciaNome = "" ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15cBancoId = 0 ;
   this.AV16cBancoAgenciaId = 0 ;
   this.AV21cCedenteNoConta = 0 ;
   this.AV17cCedenteDescricao = "" ;
   this.AV25PaginaAux = 0 ;
   this.AV24Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19BancoId = 0 ;
   this.AV18BancoAgenciaId = 0 ;
   this.AV22CedenteSequencia = 0 ;
   this.A2761CedenteSequencia = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A2772CedenteNoConta = 0 ;
   this.A1179CedenteDescricao = "" ;
   this.A947BancoId = 0 ;
   this.A948BancoNome = "" ;
   this.A953BancoAgenciaId = 0 ;
   this.A954BancoAgenciaNome = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e178l2_client": ["ENTER", true] ,"e118l2_client": ["'GXM_FIRST'", true] ,"e128l2_client": ["'GXM_PREVIOUS'", true] ,"e138l2_client": ["'GXM_NEXT'", true] ,"e148l2_client": ["'GXM_LAST'", true] ,"e158l2_client": ["'PROCURAR'", true] ,"e198l2_client": ["'ATUALIZAPAGINA'", true] ,"e218l1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21cCedenteNoConta',fld:'vCCEDENTENOCONTA'},{av:'AV17cCedenteDescricao',fld:'vCCEDENTEDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19BancoId',fld:'vBANCOID',hsh:true},{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CEDENTENOCONTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CEDENTENOCONTA","Title")',ctrl:'CEDENTENOCONTA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CEDENTEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CEDENTEDESCRICAO","Title")',ctrl:'CEDENTEDESCRICAO',prop:'Title'},{ctrl:'BANCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCOID","Title")',ctrl:'BANCOID',prop:'Title'},{ctrl:'BANCONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCONOME","Title")',ctrl:'BANCONOME',prop:'Title'},{ctrl:'BANCOAGENCIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCOAGENCIAID","Title")',ctrl:'BANCOAGENCIAID',prop:'Title'},{ctrl:'BANCOAGENCIANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCOAGENCIANOME","Title")',ctrl:'BANCOAGENCIANOME',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV22CedenteSequencia',fld:'vCEDENTESEQUENCIA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21cCedenteNoConta',fld:'vCCEDENTENOCONTA'},{av:'AV17cCedenteDescricao',fld:'vCCEDENTEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19BancoId',fld:'vBANCOID',hsh:true},{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21cCedenteNoConta',fld:'vCCEDENTENOCONTA'},{av:'AV17cCedenteDescricao',fld:'vCCEDENTEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19BancoId',fld:'vBANCOID',hsh:true},{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21cCedenteNoConta',fld:'vCCEDENTENOCONTA'},{av:'AV17cCedenteDescricao',fld:'vCCEDENTEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19BancoId',fld:'vBANCOID',hsh:true},{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21cCedenteNoConta',fld:'vCCEDENTENOCONTA'},{av:'AV17cCedenteDescricao',fld:'vCCEDENTEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19BancoId',fld:'vBANCOID',hsh:true},{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21cCedenteNoConta',fld:'vCCEDENTENOCONTA'},{av:'AV17cCedenteDescricao',fld:'vCCEDENTEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19BancoId',fld:'vBANCOID',hsh:true},{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoAgenciaId',fld:'vCBANCOAGENCIAID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21cCedenteNoConta',fld:'vCCEDENTENOCONTA'},{av:'AV17cCedenteDescricao',fld:'vCCEDENTEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19BancoId',fld:'vBANCOID',hsh:true},{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19BancoId", "vBANCOID", 0, "int");
   this.setVCMap("AV18BancoAgenciaId", "vBANCOAGENCIAID", 0, "int");
   this.setVCMap("AV22CedenteSequencia", "vCEDENTESEQUENCIA", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19BancoId", "vBANCOID", 0, "int");
   this.setVCMap("AV18BancoAgenciaId", "vBANCOAGENCIAID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19BancoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV18BancoAgenciaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacedente());
