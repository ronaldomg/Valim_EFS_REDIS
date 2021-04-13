/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:2:8.66
*/
gx.evt.autoSkip = false;
gx.define('hregistrarganhador', false, function () {
   this.ServerClass =  "hregistrarganhador" ;
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
      this.AV27NumLinha=gx.fn.getIntegerValue("vNUMLINHA",'.') ;
      this.AV20ItemCotacao=gx.fn.getControlValue("vITEMCOTACAO") ;
      this.AV29Mod=gx.fn.getControlValue("vMOD") ;
   };
   this.Validv_Solicitacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13q02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e15q02_client=function()
   {
      this.executeServerEvent("'MOSTRAFORNECEDOR'", true, arguments[0], false, false);
   };
   this.e11q02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17q02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,20,22,23,24,25,26];
   this.GXLastCtrlId =26;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarganhador",[],false,1,false,true,0,true,false,false,"CollSdtItemCotacao.SdtItemCotacaoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV20ItemCotacao",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV10M",22,"CTLITEMCOTACAO","Item","","ItemCotacao","int",0,"px",6,6,"right",null,[],"GXV10M","GXV10M",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10N",23,"CTLCODIGO","Cod","","Codigo","int",0,"px",10,10,"right",null,[],"GXV10N","GXV10N",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10O",24,"CTLDESCRICAO","Descrição","","Descricao","svchar",210,"px",40,40,"left",null,[],"GXV10O","GXV10O",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpfornec","vBMPFORNEC",25,0,"px",17,"px","e15q02_client","","Fornecedor","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITEM",gxz:"ZV19Item",gxold:"OV19Item",gxvar:"AV19Item",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Item=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Item=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vITEM",gx.O.AV19Item,0)},c2v:function(){gx.O.AV19Item=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITEM",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaoempresaid,isvalid:null,rgrid:[],fld:"vSOLICITACAOEMPRESAID",gxz:"ZV18SolicitacaoEmpresaId",gxold:"OV18SolicitacaoEmpresaId",gxvar:"AV18SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV18SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOEMPRESAID",gx.O.AV18SolicitacaoEmpresaId,0)},c2v:function(){gx.O.AV18SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV13SolicitacaoNumero",gxold:"OV13SolicitacaoNumero",gxvar:"AV13SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV13SolicitacaoNumero,0)},c2v:function(){gx.O.AV13SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[22]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLITEMCOTACAO",gxz:"ZV33GXV10M",gxold:"OV33GXV10M",gxvar:"GXV10M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10M=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33GXV10M=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLITEMCOTACAO",row || gx.fn.currentGridRowImpl(21),gx.O.GXV10M,0)},c2v:function(){gx.O.GXV10M=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLITEMCOTACAO",row || gx.fn.currentGridRowImpl(21),'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIGO",gxz:"ZV34GXV10N",gxold:"OV34GXV10N",gxvar:"GXV10N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10N=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34GXV10N=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCODIGO",row || gx.fn.currentGridRowImpl(21),gx.O.GXV10N,0)},c2v:function(){gx.O.GXV10N=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCODIGO",row || gx.fn.currentGridRowImpl(21),'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCRICAO",gxz:"ZV35GXV10O",gxold:"OV35GXV10O",gxvar:"GXV10O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10O=Value},v2z:function(Value){gx.O.ZV35GXV10O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCRICAO",row || gx.fn.currentGridRowImpl(21),gx.O.GXV10O,0)},c2v:function(){gx.O.GXV10O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCRICAO",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFORNEC",gxz:"ZV11bmpFornec",gxold:"OV11bmpFornec",gxvar:"AV11bmpFornec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11bmpFornec=Value},v2z:function(Value){gx.O.ZV11bmpFornec=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFORNEC",row || gx.fn.currentGridRowImpl(21),gx.O.AV11bmpFornec,gx.O.AV36Bmpfornec_GXI)},c2v:function(){gx.O.AV36Bmpfornec_GXI=this.val_GXI();gx.O.AV11bmpFornec=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFORNEC",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFORNEC_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV36Bmpfornec_GXI',nac:gx.falseFn};
   GXValidFnc[26]={fld:"DIV2", format:2,grid:0};
   this.AV19Item = 0 ;
   this.ZV19Item = 0 ;
   this.OV19Item = 0 ;
   this.AV18SolicitacaoEmpresaId = "" ;
   this.ZV18SolicitacaoEmpresaId = "" ;
   this.OV18SolicitacaoEmpresaId = "" ;
   this.AV13SolicitacaoNumero = 0 ;
   this.ZV13SolicitacaoNumero = 0 ;
   this.OV13SolicitacaoNumero = 0 ;
   this.ZV33GXV10M = 0 ;
   this.OV33GXV10M = 0 ;
   this.ZV34GXV10N = 0 ;
   this.OV34GXV10N = 0 ;
   this.ZV35GXV10O = "" ;
   this.OV35GXV10O = "" ;
   this.ZV11bmpFornec = "" ;
   this.OV11bmpFornec = "" ;
   this.AV19Item = 0 ;
   this.AV18SolicitacaoEmpresaId = "" ;
   this.AV13SolicitacaoNumero = 0 ;
   this.AV29Mod = "" ;
   this.GXV10M = 0 ;
   this.GXV10N = 0 ;
   this.GXV10O = "" ;
   this.AV11bmpFornec = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4051SolicitacaoItemUsuarioAlt = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3481CotacaoUsuarioAlt = "" ;
   this.AV27NumLinha = 0 ;
   this.AV20ItemCotacao = [ ] ;
   this.Events = {"e13q02_client": ["ENTER", true] ,"e15q02_client": ["'MOSTRAFORNECEDOR'", true] ,"e11q02_client": ["'FECHAR'", true] ,"e17q02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV20ItemCotacao',fld:'vITEMCOTACAO',grid:21},{av:'AV19Item',fld:'vITEM'},{av:'AV27NumLinha',fld:'vNUMLINHA'}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV27NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV27NumLinha',fld:'vNUMLINHA'},{av:'AV20ItemCotacao',fld:'vITEMCOTACAO',grid:21},{av:'AV19Item',fld:'vITEM'}],[{av:'AV27NumLinha',fld:'vNUMLINHA'},{ctrl:'CTLDESCRICAO',prop:'Fontbold'},{ctrl:'CTLITEMCOTACAO',prop:'Fontbold'}]];
   this.EvtParms["'MOSTRAFORNECEDOR'"] = [[{av:'AV20ItemCotacao',fld:'vITEMCOTACAO',grid:21},{av:'AV13SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV29Mod',fld:'vMOD',hsh:true}],[{av:'AV19Item',fld:'vITEM'},{av:'AV23ItemDescricao',fld:'vITEMDESCRICAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV19Item',fld:'vITEM'},{av:'AV27NumLinha',fld:'vNUMLINHA'},{av:'AV20ItemCotacao',fld:'vITEMCOTACAO',grid:21}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV27NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV19Item',fld:'vITEM'},{av:'AV27NumLinha',fld:'vNUMLINHA'},{av:'AV20ItemCotacao',fld:'vITEMCOTACAO',grid:21}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV27NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV19Item',fld:'vITEM'},{av:'AV27NumLinha',fld:'vNUMLINHA'},{av:'AV20ItemCotacao',fld:'vITEMCOTACAO',grid:21}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV27NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV19Item',fld:'vITEM'},{av:'AV27NumLinha',fld:'vNUMLINHA'},{av:'AV20ItemCotacao',fld:'vITEMCOTACAO',grid:21}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV27NumLinha',fld:'vNUMLINHA'}]];
   this.setVCMap("AV27NumLinha", "vNUMLINHA", 0, "int");
   this.setVCMap("AV20ItemCotacao", "vITEMCOTACAO", 0, "CollSdtItemCotacao.SdtItemCotacaoItem");
   this.setVCMap("AV29Mod", "vMOD", 0, "char");
   this.setVCMap("AV27NumLinha", "vNUMLINHA", 0, "int");
   this.setVCMap("AV20ItemCotacao", "vITEMCOTACAO", 0, "CollSdtItemCotacao.SdtItemCotacaoItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV11bmpFornec", rfrProp:"Value", gxAttId:"Bmpfornec"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11bmpFornec", rfrProp:"Tooltiptext", gxAttId:"Bmpfornec"});
   Grid1Container.addRefreshingVar({rfrVar:"AV27NumLinha"});
   Grid1Container.addRefreshingVar({rfrVar:"AV20ItemCotacao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   this.addGridBCProperty("Itemcotacao", ["ItemCotacao"], this.GXValidFnc[22], "AV20ItemCotacao");
   this.addGridBCProperty("Itemcotacao", ["Codigo"], this.GXValidFnc[23], "AV20ItemCotacao");
   this.addGridBCProperty("Itemcotacao", ["Descricao"], this.GXValidFnc[24], "AV20ItemCotacao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarganhador());
