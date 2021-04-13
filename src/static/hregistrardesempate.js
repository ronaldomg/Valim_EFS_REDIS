/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:2:7.8
*/
gx.evt.autoSkip = false;
gx.define('hregistrardesempate', false, function () {
   this.ServerClass =  "hregistrardesempate" ;
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
      this.AV31Flag=gx.fn.getControlValue("vFLAG") ;
      this.AV30NumLinha=gx.fn.getIntegerValue("vNUMLINHA",'.') ;
      this.AV34Mod=gx.fn.getControlValue("vMOD") ;
   };
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
   this.e13py2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e15py2_client=function()
   {
      this.executeServerEvent("'MOSTRAFORNECEDOR'", true, arguments[0], false, false);
   };
   this.e11py2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17py2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,16,17,18,19,20,21,25,26];
   this.GXLastCtrlId =26;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrardesempate",[],false,1,false,true,0,true,false,false,"CollSdtDesempateCotacao.SdtDesempateCotacaoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV21SdtDesempate",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV10F",15,"CTLITEMCOTACAO","Item","","ItemCotacao","int",0,"px",6,6,"right",null,[],"GXV10F","GXV10F",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10G",16,"CTLNOMEPRODUTO","Descrição","","NomeProduto","svchar",0,"px",40,40,"left",null,[],"GXV10G","GXV10G",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV10H",17,"CTLVALOR","Valor","","Valor","decimal",0,"px",21,21,"right",null,[],"GXV10H","GXV10H",true,4,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpfornec","vBMPFORNEC",18,0,"px",17,"px","e15py2_client","","Fornecedor","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV10J",19,"CTLCODFORNECEDOR","Código do Titular","","CodFornecedor","int",0,"px",7,7,"right",null,[],"GXV10J","GXV10J",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10K",20,"CTLNOMEFORNECEDOR","Nome Cliente/Fornecedor","","NomeFornecedor","svchar",0,"px",60,60,"left",null,[],"GXV10K","GXV10K",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV11SolicitacaoNumero",gxold:"OV11SolicitacaoNumero",gxvar:"AV11SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV11SolicitacaoNumero,0)},c2v:function(){gx.O.AV11SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLITEMCOTACAO",gxz:"ZV38GXV10F",gxold:"OV38GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10F=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38GXV10F=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLITEMCOTACAO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLITEMCOTACAO",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOMEPRODUTO",gxz:"ZV39GXV10G",gxold:"OV39GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10G=Value},v2z:function(Value){gx.O.ZV39GXV10G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOMEPRODUTO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10G,0)},c2v:function(){gx.O.GXV10G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOMEPRODUTO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV40GXV10H",gxold:"OV40GXV10H",gxvar:"GXV10H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10H=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV40GXV10H=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10H,4,',')},c2v:function(){gx.O.GXV10H=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(14),'.',',')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFORNEC",gxz:"ZV15bmpFornec",gxold:"OV15bmpFornec",gxvar:"AV15bmpFornec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpFornec=Value},v2z:function(Value){gx.O.ZV15bmpFornec=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFORNEC",row || gx.fn.currentGridRowImpl(14),gx.O.AV15bmpFornec,gx.O.AV43Bmpfornec_GXI)},c2v:function(){gx.O.AV43Bmpfornec_GXI=this.val_GXI();gx.O.AV15bmpFornec=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFORNEC",row || gx.fn.currentGridRowImpl(14))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFORNEC_GXI",row || gx.fn.currentGridRowImpl(14))}, gxvar_GXI:'AV43Bmpfornec_GXI',nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODFORNECEDOR",gxz:"ZV41GXV10J",gxold:"OV41GXV10J",gxvar:"GXV10J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41GXV10J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCODFORNECEDOR",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10J,0)},c2v:function(){gx.O.GXV10J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCODFORNECEDOR",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOMEFORNECEDOR",gxz:"ZV42GXV10K",gxold:"OV42GXV10K",gxvar:"GXV10K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10K=Value},v2z:function(Value){gx.O.ZV42GXV10K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOMEFORNECEDOR",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10K,0)},c2v:function(){gx.O.GXV10K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOMEFORNECEDOR",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[21]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaoempresaid,isvalid:null,rgrid:[],fld:"vSOLICITACAOEMPRESAID",gxz:"ZV14SolicitacaoEmpresaId",gxold:"OV14SolicitacaoEmpresaId",gxvar:"AV14SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV14SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOEMPRESAID",gx.O.AV14SolicitacaoEmpresaId,0)},c2v:function(){gx.O.AV14SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITEMVALOR",gxz:"ZV23ItemValor",gxold:"OV23ItemValor",gxvar:"AV23ItemValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ItemValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23ItemValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vITEMVALOR",gx.O.AV23ItemValor,4,',')},c2v:function(){gx.O.AV23ItemValor=this.val()},val:function(){return gx.fn.getDecimalValue("vITEMVALOR",'.',',')},nac:gx.falseFn};
   this.AV11SolicitacaoNumero = 0 ;
   this.ZV11SolicitacaoNumero = 0 ;
   this.OV11SolicitacaoNumero = 0 ;
   this.ZV38GXV10F = 0 ;
   this.OV38GXV10F = 0 ;
   this.ZV39GXV10G = "" ;
   this.OV39GXV10G = "" ;
   this.ZV40GXV10H = 0 ;
   this.OV40GXV10H = 0 ;
   this.ZV15bmpFornec = "" ;
   this.OV15bmpFornec = "" ;
   this.ZV41GXV10J = 0 ;
   this.OV41GXV10J = 0 ;
   this.ZV42GXV10K = "" ;
   this.OV42GXV10K = "" ;
   this.AV14SolicitacaoEmpresaId = "" ;
   this.ZV14SolicitacaoEmpresaId = "" ;
   this.OV14SolicitacaoEmpresaId = "" ;
   this.AV23ItemValor = 0 ;
   this.ZV23ItemValor = 0 ;
   this.OV23ItemValor = 0 ;
   this.AV11SolicitacaoNumero = 0 ;
   this.AV14SolicitacaoEmpresaId = "" ;
   this.AV23ItemValor = 0 ;
   this.AV34Mod = "" ;
   this.GXV10F = 0 ;
   this.GXV10G = "" ;
   this.GXV10H = 0 ;
   this.AV15bmpFornec = "" ;
   this.GXV10J = 0 ;
   this.GXV10K = "" ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2963ProdutoDataHoraAlt = gx.date.nullDate() ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A4051SolicitacaoItemUsuarioAlt = "" ;
   this.AV31Flag = "" ;
   this.AV30NumLinha = 0 ;
   this.Events = {"e13py2_client": ["ENTER", true] ,"e15py2_client": ["'MOSTRAFORNECEDOR'", true] ,"e11py2_client": ["'FECHAR'", true] ,"e17py2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV21SdtDesempate',fld:'vSDTDESEMPATE',grid:14},{av:'subGrid1_Rows'},{av:'AV15bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV31Flag',fld:'vFLAG',hsh:true},{av:'AV30NumLinha',fld:'vNUMLINHA'}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV30NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV30NumLinha',fld:'vNUMLINHA'}],[{av:'AV30NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["'MOSTRAFORNECEDOR'"] = [[{av:'AV21SdtDesempate',fld:'vSDTDESEMPATE',grid:14},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV34Mod',fld:'vMOD',hsh:true}],[{av:'AV12Item',fld:'vITEM'},{av:'AV13ItemDescricao',fld:'vITEMDESCRICAO'},{av:'AV23ItemValor',fld:'vITEMVALOR'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV31Flag',fld:'vFLAG',hsh:true},{av:'AV30NumLinha',fld:'vNUMLINHA'},{av:'AV21SdtDesempate',fld:'vSDTDESEMPATE',grid:14}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV30NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV31Flag',fld:'vFLAG',hsh:true},{av:'AV30NumLinha',fld:'vNUMLINHA'},{av:'AV21SdtDesempate',fld:'vSDTDESEMPATE',grid:14}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV30NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV31Flag',fld:'vFLAG',hsh:true},{av:'AV30NumLinha',fld:'vNUMLINHA'},{av:'AV21SdtDesempate',fld:'vSDTDESEMPATE',grid:14}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV30NumLinha',fld:'vNUMLINHA'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15bmpFornec',fld:'vBMPFORNEC'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Tooltiptext")',ctrl:'vBMPFORNEC',prop:'Tooltiptext'},{av:'AV31Flag',fld:'vFLAG',hsh:true},{av:'AV30NumLinha',fld:'vNUMLINHA'},{av:'AV21SdtDesempate',fld:'vSDTDESEMPATE',grid:14}],[{ctrl:'GRID1',prop:'Rows'},{av:'AV30NumLinha',fld:'vNUMLINHA'}]];
   this.setVCMap("AV31Flag", "vFLAG", 0, "char");
   this.setVCMap("AV30NumLinha", "vNUMLINHA", 0, "int");
   this.setVCMap("AV34Mod", "vMOD", 0, "char");
   this.setVCMap("AV31Flag", "vFLAG", 0, "char");
   this.setVCMap("AV30NumLinha", "vNUMLINHA", 0, "int");
   Grid1Container.addRefreshingVar({rfrVar:"AV15bmpFornec", rfrProp:"Value", gxAttId:"Bmpfornec"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15bmpFornec", rfrProp:"Tooltiptext", gxAttId:"Bmpfornec"});
   Grid1Container.addRefreshingVar({rfrVar:"AV31Flag"});
   Grid1Container.addRefreshingVar({rfrVar:"AV30NumLinha"});
   this.addGridBCProperty("Sdtdesempate", ["ItemCotacao"], this.GXValidFnc[15], "AV21SdtDesempate");
   this.addGridBCProperty("Sdtdesempate", ["NomeProduto"], this.GXValidFnc[16], "AV21SdtDesempate");
   this.addGridBCProperty("Sdtdesempate", ["Valor"], this.GXValidFnc[17], "AV21SdtDesempate");
   this.addGridBCProperty("Sdtdesempate", ["CodFornecedor"], this.GXValidFnc[19], "AV21SdtDesempate");
   this.addGridBCProperty("Sdtdesempate", ["NomeFornecedor"], this.GXValidFnc[20], "AV21SdtDesempate");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrardesempate());
