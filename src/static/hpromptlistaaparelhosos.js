/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:58.99
*/
gx.evt.autoSkip = false;
gx.define('hpromptlistaaparelhosos', false, function () {
   this.ServerClass =  "hpromptlistaaparelhosos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.A8792OrdemServicoId=gx.fn.getIntegerValue("ORDEMSERVICOID",'.') ;
      this.AV13ordemservicoid=gx.fn.getIntegerValue("vORDEMSERVICOID",'.') ;
      this.A8791OrdemServicoEmpresaId=gx.fn.getControlValue("ORDEMSERVICOEMPRESAID") ;
      this.AV12OrdemServicoEmpresaId=gx.fn.getControlValue("vORDEMSERVICOEMPRESAID") ;
      this.A8718OrdemServicoDatHoraEmissao=gx.fn.getDateTimeValue("ORDEMSERVICODATHORAEMISSAO") ;
      this.A8717OrdemServicoFilialId=gx.fn.getIntegerValue("ORDEMSERVICOFILIALID",'.') ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A8675OrdemServicoTipoDescricao=gx.fn.getControlValue("ORDEMSERVICOTIPODESCRICAO") ;
      this.A8919OrdemServicoSituacao=gx.fn.getControlValue("ORDEMSERVICOSITUACAO") ;
      this.A8825AparelhoId=gx.fn.getIntegerValue("APARELHOID",'.') ;
      this.A8909OrdemServicoApareSeq=gx.fn.getIntegerValue("ORDEMSERVICOAPARESEQ",'.') ;
      this.A8824AparelhoEmpresaId=gx.fn.getControlValue("APARELHOEMPRESAID") ;
      this.A8821AparelhoDescricao=gx.fn.getControlValue("APARELHODESCRICAO") ;
      this.A8607OrdemServicoFaseId=gx.fn.getIntegerValue("ORDEMSERVICOFASEID",'.') ;
      this.A8881OrdemServicoApareSNEntregue=gx.fn.getControlValue("ORDEMSERVICOAPARESNENTREGUE") ;
      this.AV46ProAparelho=gx.fn.getControlValue("vPROAPARELHO") ;
      this.AV14OrdemServicoProfissionalId=gx.fn.getIntegerValue("vORDEMSERVICOPROFISSIONALID",'.') ;
      this.AV5AparelhoEmpresaId=gx.fn.getControlValue("vAPARELHOEMPRESAID") ;
      this.A8566ProfissionalId=gx.fn.getIntegerValue("PROFISSIONALID",'.') ;
      this.A8608ProfissionalNome=gx.fn.getControlValue("PROFISSIONALNOME") ;
      this.AV15ProfissionalId=gx.fn.getIntegerValue("vPROFISSIONALID",'.') ;
      this.AV16ProfissionalNome=gx.fn.getControlValue("vPROFISSIONALNOME") ;
      this.A8882OrdemServicoApareDtPrevisao=gx.fn.getDateValue("ORDEMSERVICOAPAREDTPREVISAO") ;
      this.AV42OrdemServicoOrdenacaoGrid=gx.fn.getIntegerValue("vORDEMSERVICOORDENACAOGRID",'.') ;
      this.AV18DesEquipamento=gx.fn.getControlValue("vDESEQUIPAMENTO") ;
      this.A8606OrdemServicoFaseEmpresaId=gx.fn.getControlValue("ORDEMSERVICOFASEEMPRESAID") ;
      this.AV41OrdemServicoFaseEmpresaId=gx.fn.getControlValue("vORDEMSERVICOFASEEMPRESAID") ;
      this.AV44SdtOrdemServicoItem=gx.fn.getControlValue("vSDTORDEMSERVICOITEM") ;
      this.A8600OrdemServicoFaseDescricao=gx.fn.getControlValue("ORDEMSERVICOFASEDESCRICAO") ;
      this.A8602OrdemServicoFaseCorLetra=gx.fn.getIntegerValue("ORDEMSERVICOFASECORLETRA",'.') ;
      this.AV30GridTipoFaseCor=gx.fn.getIntegerValue("vGRIDTIPOFASECOR",'.') ;
      this.AV48AttributeCor=gx.fn.getControlValue("vATTRIBUTECOR") ;
   };
   this.Validv_Gridordemservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRIDORDEMSERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      if ( this.AV30GridTipoFaseCor == 1 )
      {
         this.AV48AttributeCor =  "AttributeCorVermelho"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 2 )
      {
         this.AV48AttributeCor =  "AttributeCorLaranja"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 3 )
      {
         this.AV48AttributeCor =  "AttributeCorAmarelo"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 4 )
      {
         this.AV48AttributeCor =  "AttributeCorVerde"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 5 )
      {
         this.AV48AttributeCor =  "AttributeCorAqua"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 6 )
      {
         this.AV48AttributeCor =  "AttributeCorAzul"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 7 )
      {
         this.AV48AttributeCor =  "AttributeCorRosa"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 8 )
      {
         this.AV48AttributeCor =  "AttributeCorCinza"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 9 )
      {
         this.AV48AttributeCor =  "AttributeCorPreto"  ;
      }
      else if ( this.AV30GridTipoFaseCor == 10 )
      {
         this.AV48AttributeCor =  "AttributeCorMarrom"  ;
      }
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOID","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOTIPODESCRICAO","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICODATAEMISSAO","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOFILIALID","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOCLIENTEID","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOCLIENTENOME","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOAPARELHOID","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOAPARELHODESC","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOAPAREFASEDESC","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOPROFISSIONALNOME","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOAPAREDTPREVISAO","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOVLRPRODUTOS","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOVLRSERVICOS","Class", this.AV48AttributeCor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOVLRTOTAL","Class", this.AV48AttributeCor );
   };
   this.e111yw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141yw2_client=function()
   {
      this.executeServerEvent("'TROCAFASE'", true, arguments[0], false, false);
   };
   this.e151yw2_client=function()
   {
      this.executeServerEvent("'LISTAPROFISSIONAIS'", true, arguments[0], false, false);
   };
   this.e161yw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e171yw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpromptlistaaparelhosos",[],false,1,true,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Gridordemservicoid",24,"vGRIDORDEMSERVICOID","OS","","GridOrdemServicoId","int",0,"px",9,9,"right",null,[],"Gridordemservicoid","GridOrdemServicoId",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicofilialid",25,"vGRIDORDEMSERVICOFILIALID","Fil.","","GridOrdemServicoFilialId","int",0,"px",7,7,"right",null,[],"Gridordemservicofilialid","GridOrdemServicoFilialId",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicotipodescricao",26,"vGRIDORDEMSERVICOTIPODESCRICAO","Tipo","","GridOrdemServicoTipoDescricao","svchar",0,"px",30,30,"left",null,[],"Gridordemservicotipodescricao","GridOrdemServicoTipoDescricao",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoclienteid",27,"vGRIDORDEMSERVICOCLIENTEID","Cliente","","GridOrdemServicoClienteId","int",0,"px",7,7,"right",null,[],"Gridordemservicoclienteid","GridOrdemServicoClienteId",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoclientenome",28,"vGRIDORDEMSERVICOCLIENTENOME","Cliente","","GridOrdemServicoClienteNome","svchar",0,"px",60,60,"left",null,[],"Gridordemservicoclientenome","GridOrdemServicoClienteNome",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoaparelhoid",29,"vGRIDORDEMSERVICOAPARELHOID","Aparelho","","GridOrdemServicoAparelhoId","int",0,"px",4,4,"right",null,[],"Gridordemservicoaparelhoid","GridOrdemServicoAparelhoId",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoaparelhodesc",30,"vGRIDORDEMSERVICOAPARELHODESC","","","GridOrdemServicoAparelhoDesc","svchar",0,"px",40,40,"left",null,[],"Gridordemservicoaparelhodesc","GridOrdemServicoAparelhoDesc",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicodataemissao",31,"vGRIDORDEMSERVICODATAEMISSAO","Dt. Emissão","","GridOrdemServicoDataEmissao","dtime",0,"px",16,16,"right",null,[],"Gridordemservicodataemissao","GridOrdemServicoDataEmissao",true,5,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoprofissionalnome",32,"vGRIDORDEMSERVICOPROFISSIONALNOME","Profissional","","GridOrdemServicoProfissionalNome","svchar",0,"px",40,40,"left",null,[],"Gridordemservicoprofissionalnome","GridOrdemServicoProfissionalNome",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoaparefasedesc",33,"vGRIDORDEMSERVICOAPAREFASEDESC","Fase","","GridOrdemServicoApareFaseDesc","svchar",0,"px",30,30,"left",null,[],"Gridordemservicoaparefasedesc","GridOrdemServicoApareFaseDesc",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoaparedtprevisao",34,"vGRIDORDEMSERVICOAPAREDTPREVISAO","Dt. Previsão","","GridOrdemServicoApareDtPrevisao","date",0,"px",10,10,"right",null,[],"Gridordemservicoaparedtprevisao","GridOrdemServicoApareDtPrevisao",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicovlrprodutos",35,"vGRIDORDEMSERVICOVLRPRODUTOS","Produtos","","GridOrdemServicoVlrProdutos","decimal",0,"px",10,10,"right",null,[],"Gridordemservicovlrprodutos","GridOrdemServicoVlrProdutos",true,2,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicovlrservicos",36,"vGRIDORDEMSERVICOVLRSERVICOS","Serviços","","GridOrdemServicoVlrServicos","decimal",0,"px",10,10,"right",null,[],"Gridordemservicovlrservicos","GridOrdemServicoVlrServicos",true,2,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicovlrtotal",37,"vGRIDORDEMSERVICOVLRTOTAL","Vlr. Total","","GridOrdemServicoVlrTotal","decimal",0,"px",21,21,"right",null,[],"Gridordemservicovlrtotal","GridOrdemServicoVlrTotal",true,4,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoaparelhoseq",38,"vGRIDORDEMSERVICOAPARELHOSEQ","Grid Ordem Servico Aparelho Seq","","GridOrdemServicoAparelhoSeq","int",0,"px",4,4,"right",null,[],"Gridordemservicoaparelhoseq","GridOrdemServicoAparelhoSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpfase","vBMPFASE",39,16,"px",16,"px","e141yw2_client","","Fase","Image","");
   GridContainer.addBitmap("&Bmppro","vBMPPRO",40,0,"px",17,"px","e151yw2_client","","Pro","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"OSLBL", format:0,grid:0};
   GXValidFnc[10]={fld:"OSID", format:0,grid:0};
   GXValidFnc[13]={fld:"TIPOLBL", format:0,grid:0};
   GXValidFnc[15]={fld:"TIPO", format:0,grid:0};
   GXValidFnc[18]={fld:"CLIENTELBL", format:0,grid:0};
   GXValidFnc[20]={fld:"CLIENTE", format:0,grid:0};
   GXValidFnc[24]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Validv_Gridordemservicoid,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOID",gxz:"ZV28GridOrdemServicoId",gxold:"OV28GridOrdemServicoId",gxvar:"AV28GridOrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28GridOrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28GridOrdemServicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOID",row || gx.fn.currentGridRowImpl(23),gx.O.AV28GridOrdemServicoId,0)},c2v:function(){gx.O.AV28GridOrdemServicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRIDORDEMSERVICOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOFILIALID",gxz:"ZV27GridOrdemServicoFilialId",gxold:"OV27GridOrdemServicoFilialId",gxvar:"AV27GridOrdemServicoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27GridOrdemServicoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27GridOrdemServicoFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOFILIALID",row || gx.fn.currentGridRowImpl(23),gx.O.AV27GridOrdemServicoFilialId,0)},c2v:function(){gx.O.AV27GridOrdemServicoFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRIDORDEMSERVICOFILIALID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOTIPODESCRICAO",gxz:"ZV29GridOrdemServicoTipoDescricao",gxold:"OV29GridOrdemServicoTipoDescricao",gxvar:"AV29GridOrdemServicoTipoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29GridOrdemServicoTipoDescricao=Value},v2z:function(Value){gx.O.ZV29GridOrdemServicoTipoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.AV29GridOrdemServicoTipoDescricao,0)},c2v:function(){gx.O.AV29GridOrdemServicoTipoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOCLIENTEID",gxz:"ZV24GridOrdemServicoClienteId",gxold:"OV24GridOrdemServicoClienteId",gxvar:"AV24GridOrdemServicoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24GridOrdemServicoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24GridOrdemServicoClienteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOCLIENTEID",row || gx.fn.currentGridRowImpl(23),gx.O.AV24GridOrdemServicoClienteId,0)},c2v:function(){gx.O.AV24GridOrdemServicoClienteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRIDORDEMSERVICOCLIENTEID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOCLIENTENOME",gxz:"ZV25GridOrdemServicoClienteNome",gxold:"OV25GridOrdemServicoClienteNome",gxvar:"AV25GridOrdemServicoClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV25GridOrdemServicoClienteNome=Value},v2z:function(Value){gx.O.ZV25GridOrdemServicoClienteNome=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOCLIENTENOME",row || gx.fn.currentGridRowImpl(23),gx.O.AV25GridOrdemServicoClienteNome,0)},c2v:function(){gx.O.AV25GridOrdemServicoClienteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDORDEMSERVICOCLIENTENOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOAPARELHOID",gxz:"ZV22GridOrdemServicoAparelhoId",gxold:"OV22GridOrdemServicoAparelhoId",gxvar:"AV22GridOrdemServicoAparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22GridOrdemServicoAparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22GridOrdemServicoAparelhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOAPARELHOID",row || gx.fn.currentGridRowImpl(23),gx.O.AV22GridOrdemServicoAparelhoId,0)},c2v:function(){gx.O.AV22GridOrdemServicoAparelhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRIDORDEMSERVICOAPARELHOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOAPARELHODESC",gxz:"ZV21GridOrdemServicoAparelhoDesc",gxold:"OV21GridOrdemServicoAparelhoDesc",gxvar:"AV21GridOrdemServicoAparelhoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21GridOrdemServicoAparelhoDesc=Value},v2z:function(Value){gx.O.ZV21GridOrdemServicoAparelhoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOAPARELHODESC",row || gx.fn.currentGridRowImpl(23),gx.O.AV21GridOrdemServicoAparelhoDesc,0)},c2v:function(){gx.O.AV21GridOrdemServicoAparelhoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDORDEMSERVICOAPARELHODESC",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICODATAEMISSAO",gxz:"ZV26GridOrdemServicoDataEmissao",gxold:"OV26GridOrdemServicoDataEmissao",gxvar:"AV26GridOrdemServicoDataEmissao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26GridOrdemServicoDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26GridOrdemServicoDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICODATAEMISSAO",row || gx.fn.currentGridRowImpl(23),gx.O.AV26GridOrdemServicoDataEmissao,0)},c2v:function(){gx.O.AV26GridOrdemServicoDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vGRIDORDEMSERVICODATAEMISSAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOPROFISSIONALNOME",gxz:"ZV9GridOrdemServicoProfissionalNome",gxold:"OV9GridOrdemServicoProfissionalNome",gxvar:"AV9GridOrdemServicoProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV9GridOrdemServicoProfissionalNome=Value},v2z:function(Value){gx.O.ZV9GridOrdemServicoProfissionalNome=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(23),gx.O.AV9GridOrdemServicoProfissionalNome,0)},c2v:function(){gx.O.AV9GridOrdemServicoProfissionalNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDORDEMSERVICOPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOAPAREFASEDESC",gxz:"ZV20GridOrdemServicoApareFaseDesc",gxold:"OV20GridOrdemServicoApareFaseDesc",gxvar:"AV20GridOrdemServicoApareFaseDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20GridOrdemServicoApareFaseDesc=Value},v2z:function(Value){gx.O.ZV20GridOrdemServicoApareFaseDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOAPAREFASEDESC",row || gx.fn.currentGridRowImpl(23),gx.O.AV20GridOrdemServicoApareFaseDesc,0)},c2v:function(){gx.O.AV20GridOrdemServicoApareFaseDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDORDEMSERVICOAPAREFASEDESC",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOAPAREDTPREVISAO",gxz:"ZV7GridOrdemServicoApareDtPrevisao",gxold:"OV7GridOrdemServicoApareDtPrevisao",gxvar:"AV7GridOrdemServicoApareDtPrevisao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7GridOrdemServicoApareDtPrevisao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7GridOrdemServicoApareDtPrevisao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOAPAREDTPREVISAO",row || gx.fn.currentGridRowImpl(23),gx.O.AV7GridOrdemServicoApareDtPrevisao,0)},c2v:function(){gx.O.AV7GridOrdemServicoApareDtPrevisao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vGRIDORDEMSERVICOAPAREDTPREVISAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOVLRPRODUTOS",gxz:"ZV50GridOrdemServicoVlrProdutos",gxold:"OV50GridOrdemServicoVlrProdutos",gxvar:"AV50GridOrdemServicoVlrProdutos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV50GridOrdemServicoVlrProdutos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV50GridOrdemServicoVlrProdutos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vGRIDORDEMSERVICOVLRPRODUTOS",row || gx.fn.currentGridRowImpl(23),gx.O.AV50GridOrdemServicoVlrProdutos,2,',')},c2v:function(){gx.O.AV50GridOrdemServicoVlrProdutos=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vGRIDORDEMSERVICOVLRPRODUTOS",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOVLRSERVICOS",gxz:"ZV49GridOrdemServicoVlrServicos",gxold:"OV49GridOrdemServicoVlrServicos",gxvar:"AV49GridOrdemServicoVlrServicos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV49GridOrdemServicoVlrServicos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV49GridOrdemServicoVlrServicos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vGRIDORDEMSERVICOVLRSERVICOS",row || gx.fn.currentGridRowImpl(23),gx.O.AV49GridOrdemServicoVlrServicos,2,',')},c2v:function(){gx.O.AV49GridOrdemServicoVlrServicos=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vGRIDORDEMSERVICOVLRSERVICOS",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOVLRTOTAL",gxz:"ZV10GridOrdemServicoVlrTotal",gxold:"OV10GridOrdemServicoVlrTotal",gxvar:"AV10GridOrdemServicoVlrTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10GridOrdemServicoVlrTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10GridOrdemServicoVlrTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vGRIDORDEMSERVICOVLRTOTAL",row || gx.fn.currentGridRowImpl(23),gx.O.AV10GridOrdemServicoVlrTotal,4,',')},c2v:function(){gx.O.AV10GridOrdemServicoVlrTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vGRIDORDEMSERVICOVLRTOTAL",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOAPARELHOSEQ",gxz:"ZV23GridOrdemServicoAparelhoSeq",gxold:"OV23GridOrdemServicoAparelhoSeq",gxvar:"AV23GridOrdemServicoAparelhoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23GridOrdemServicoAparelhoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23GridOrdemServicoAparelhoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOAPARELHOSEQ",row || gx.fn.currentGridRowImpl(23),gx.O.AV23GridOrdemServicoAparelhoSeq,0)},c2v:function(){gx.O.AV23GridOrdemServicoAparelhoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRIDORDEMSERVICOAPARELHOSEQ",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFASE",gxz:"ZV53bmpFase",gxold:"OV53bmpFase",gxvar:"AV53bmpFase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV53bmpFase=Value},v2z:function(Value){gx.O.ZV53bmpFase=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFASE",row || gx.fn.currentGridRowImpl(23),gx.O.AV53bmpFase,gx.O.AV57Bmpfase_GXI)},c2v:function(){gx.O.AV57Bmpfase_GXI=this.val_GXI();gx.O.AV53bmpFase=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFASE",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFASE_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV57Bmpfase_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRO",gxz:"ZV51BmpPro",gxold:"OV51BmpPro",gxvar:"AV51BmpPro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV51BmpPro=Value},v2z:function(Value){gx.O.ZV51BmpPro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRO",row || gx.fn.currentGridRowImpl(23),gx.O.AV51BmpPro,gx.O.AV56Bmppro_GXI)},c2v:function(){gx.O.AV56Bmppro_GXI=this.val_GXI();gx.O.AV51BmpPro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRO",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRO_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV56Bmppro_GXI',nac:gx.falseFn};
   this.ZV28GridOrdemServicoId = 0 ;
   this.OV28GridOrdemServicoId = 0 ;
   this.ZV27GridOrdemServicoFilialId = 0 ;
   this.OV27GridOrdemServicoFilialId = 0 ;
   this.ZV29GridOrdemServicoTipoDescricao = "" ;
   this.OV29GridOrdemServicoTipoDescricao = "" ;
   this.ZV24GridOrdemServicoClienteId = 0 ;
   this.OV24GridOrdemServicoClienteId = 0 ;
   this.ZV25GridOrdemServicoClienteNome = "" ;
   this.OV25GridOrdemServicoClienteNome = "" ;
   this.ZV22GridOrdemServicoAparelhoId = 0 ;
   this.OV22GridOrdemServicoAparelhoId = 0 ;
   this.ZV21GridOrdemServicoAparelhoDesc = "" ;
   this.OV21GridOrdemServicoAparelhoDesc = "" ;
   this.ZV26GridOrdemServicoDataEmissao = gx.date.nullDate() ;
   this.OV26GridOrdemServicoDataEmissao = gx.date.nullDate() ;
   this.ZV9GridOrdemServicoProfissionalNome = "" ;
   this.OV9GridOrdemServicoProfissionalNome = "" ;
   this.ZV20GridOrdemServicoApareFaseDesc = "" ;
   this.OV20GridOrdemServicoApareFaseDesc = "" ;
   this.ZV7GridOrdemServicoApareDtPrevisao = gx.date.nullDate() ;
   this.OV7GridOrdemServicoApareDtPrevisao = gx.date.nullDate() ;
   this.ZV50GridOrdemServicoVlrProdutos = 0 ;
   this.OV50GridOrdemServicoVlrProdutos = 0 ;
   this.ZV49GridOrdemServicoVlrServicos = 0 ;
   this.OV49GridOrdemServicoVlrServicos = 0 ;
   this.ZV10GridOrdemServicoVlrTotal = 0 ;
   this.OV10GridOrdemServicoVlrTotal = 0 ;
   this.ZV23GridOrdemServicoAparelhoSeq = 0 ;
   this.OV23GridOrdemServicoAparelhoSeq = 0 ;
   this.ZV53bmpFase = "" ;
   this.OV53bmpFase = "" ;
   this.ZV51BmpPro = "" ;
   this.OV51BmpPro = "" ;
   this.AV13ordemservicoid = 0 ;
   this.AV28GridOrdemServicoId = 0 ;
   this.AV27GridOrdemServicoFilialId = 0 ;
   this.AV29GridOrdemServicoTipoDescricao = "" ;
   this.AV24GridOrdemServicoClienteId = 0 ;
   this.AV25GridOrdemServicoClienteNome = "" ;
   this.AV22GridOrdemServicoAparelhoId = 0 ;
   this.AV21GridOrdemServicoAparelhoDesc = "" ;
   this.AV26GridOrdemServicoDataEmissao = gx.date.nullDate() ;
   this.AV9GridOrdemServicoProfissionalNome = "" ;
   this.AV20GridOrdemServicoApareFaseDesc = "" ;
   this.AV7GridOrdemServicoApareDtPrevisao = gx.date.nullDate() ;
   this.AV50GridOrdemServicoVlrProdutos = 0 ;
   this.AV49GridOrdemServicoVlrServicos = 0 ;
   this.AV10GridOrdemServicoVlrTotal = 0 ;
   this.AV23GridOrdemServicoAparelhoSeq = 0 ;
   this.AV53bmpFase = "" ;
   this.AV51BmpPro = "" ;
   this.A8909OrdemServicoApareSeq = 0 ;
   this.A8792OrdemServicoId = 0 ;
   this.A8791OrdemServicoEmpresaId = "" ;
   this.A9050OSItemServicoVlrDesconto = 0 ;
   this.A8759OSItemServicoQuantidade = 0 ;
   this.A8760OSItemServicoVlrUnitario = 0 ;
   this.A8761OSItemServicoVlrTotal = 0 ;
   this.A9049OSItemProdutoVlrDesconto = 0 ;
   this.A8756OSItemProdutoVlrUnitario = 0 ;
   this.A8755OSItemProdutoQuantidade = 0 ;
   this.A8757OSItemProdutoVlrTotal = 0 ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8602OrdemServicoFaseCorLetra = 0 ;
   this.A8718OrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.A8717OrdemServicoFilialId = 0 ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A8675OrdemServicoTipoDescricao = "" ;
   this.A8919OrdemServicoSituacao = "" ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8821AparelhoDescricao = "" ;
   this.A8881OrdemServicoApareSNEntregue = "" ;
   this.A8882OrdemServicoApareDtPrevisao = gx.date.nullDate() ;
   this.A8566ProfissionalId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.AV12OrdemServicoEmpresaId = "" ;
   this.AV46ProAparelho = "" ;
   this.AV14OrdemServicoProfissionalId = 0 ;
   this.AV5AparelhoEmpresaId = "" ;
   this.AV15ProfissionalId = 0 ;
   this.AV16ProfissionalNome = "" ;
   this.AV42OrdemServicoOrdenacaoGrid = 0 ;
   this.AV18DesEquipamento = "" ;
   this.AV41OrdemServicoFaseEmpresaId = "" ;
   this.AV44SdtOrdemServicoItem = {} ;
   this.AV30GridTipoFaseCor = 0 ;
   this.AV48AttributeCor = "" ;
   this.Events = {"e111yw2_client": ["'FECHAR'", true] ,"e141yw2_client": ["'TROCAFASE'", true] ,"e151yw2_client": ["'LISTAPROFISSIONAIS'", true] ,"e161yw2_client": ["ENTER", true] ,"e171yw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Visible")',ctrl:'vBMPPRO',prop:'Visible'},{av:'AV51BmpPro',fld:'vBMPPRO'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Tooltiptext")',ctrl:'vBMPPRO',prop:'Tooltiptext'},{av:'AV53bmpFase',fld:'vBMPFASE'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Tooltiptext")',ctrl:'vBMPFASE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOPROFISSIONALNOME","Visible")',ctrl:'vGRIDORDEMSERVICOPROFISSIONALNOME',prop:'Visible'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'AV13ordemservicoid',fld:'vORDEMSERVICOID',hsh:true},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'A8718OrdemServicoDatHoraEmissao',fld:'ORDEMSERVICODATHORAEMISSAO'},{av:'A8717OrdemServicoFilialId',fld:'ORDEMSERVICOFILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'},{av:'A8919OrdemServicoSituacao',fld:'ORDEMSERVICOSITUACAO'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8909OrdemServicoApareSeq',fld:'ORDEMSERVICOAPARESEQ'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8881OrdemServicoApareSNEntregue',fld:'ORDEMSERVICOAPARESNENTREGUE'},{av:'AV46ProAparelho',fld:'vPROAPARELHO'},{av:'AV14OrdemServicoProfissionalId',fld:'vORDEMSERVICOPROFISSIONALID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV15ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV16ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'A8882OrdemServicoApareDtPrevisao',fld:'ORDEMSERVICOAPAREDTPREVISAO'},{av:'AV42OrdemServicoOrdenacaoGrid',fld:'vORDEMSERVICOORDENACAOGRID'},{av:'AV18DesEquipamento',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV41OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'AV44SdtOrdemServicoItem',fld:'vSDTORDEMSERVICOITEM'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV30GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV48AttributeCor',fld:'vATTRIBUTECOR'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV50GridOrdemServicoVlrProdutos',fld:'vGRIDORDEMSERVICOVLRPRODUTOS'},{av:'A8757OSItemProdutoVlrTotal',fld:'OSITEMPRODUTOVLRTOTAL'},{av:'AV10GridOrdemServicoVlrTotal',fld:'vGRIDORDEMSERVICOVLRTOTAL'},{av:'AV49GridOrdemServicoVlrServicos',fld:'vGRIDORDEMSERVICOVLRSERVICOS'},{av:'A8761OSItemServicoVlrTotal',fld:'OSITEMSERVICOVLRTOTAL'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'AV13ordemservicoid',fld:'vORDEMSERVICOID',hsh:true},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'A8718OrdemServicoDatHoraEmissao',fld:'ORDEMSERVICODATHORAEMISSAO'},{av:'A8717OrdemServicoFilialId',fld:'ORDEMSERVICOFILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'},{av:'A8919OrdemServicoSituacao',fld:'ORDEMSERVICOSITUACAO'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8909OrdemServicoApareSeq',fld:'ORDEMSERVICOAPARESEQ'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8881OrdemServicoApareSNEntregue',fld:'ORDEMSERVICOAPARESNENTREGUE'},{av:'AV46ProAparelho',fld:'vPROAPARELHO'},{av:'AV14OrdemServicoProfissionalId',fld:'vORDEMSERVICOPROFISSIONALID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV15ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV16ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'A8882OrdemServicoApareDtPrevisao',fld:'ORDEMSERVICOAPAREDTPREVISAO'},{av:'AV42OrdemServicoOrdenacaoGrid',fld:'vORDEMSERVICOORDENACAOGRID'},{av:'AV18DesEquipamento',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV41OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'AV44SdtOrdemServicoItem',fld:'vSDTORDEMSERVICOITEM'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV30GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV48AttributeCor',fld:'vATTRIBUTECOR'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV50GridOrdemServicoVlrProdutos',fld:'vGRIDORDEMSERVICOVLRPRODUTOS'},{av:'A8757OSItemProdutoVlrTotal',fld:'OSITEMPRODUTOVLRTOTAL'},{av:'AV10GridOrdemServicoVlrTotal',fld:'vGRIDORDEMSERVICOVLRTOTAL'},{av:'AV49GridOrdemServicoVlrServicos',fld:'vGRIDORDEMSERVICOVLRSERVICOS'},{av:'A8761OSItemServicoVlrTotal',fld:'OSITEMSERVICOVLRTOTAL'}],[{av:'AV43SdtOrdemServico',fld:'vSDTORDEMSERVICO'},{av:'AV28GridOrdemServicoId',fld:'vGRIDORDEMSERVICOID'},{av:'AV26GridOrdemServicoDataEmissao',fld:'vGRIDORDEMSERVICODATAEMISSAO'},{av:'AV27GridOrdemServicoFilialId',fld:'vGRIDORDEMSERVICOFILIALID'},{av:'AV24GridOrdemServicoClienteId',fld:'vGRIDORDEMSERVICOCLIENTEID'},{av:'AV25GridOrdemServicoClienteNome',fld:'vGRIDORDEMSERVICOCLIENTENOME'},{av:'AV29GridOrdemServicoTipoDescricao',fld:'vGRIDORDEMSERVICOTIPODESCRICAO'},{av:'gx.fn.getCtrlProperty("OSID","Caption")',ctrl:'OSID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TIPO","Caption")',ctrl:'TIPO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CLIENTE","Caption")',ctrl:'CLIENTE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Visible")',ctrl:'vBMPFASE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Tooltiptext")',ctrl:'vBMPFASE',prop:'Tooltiptext'},{av:'AV6AparelhoId',fld:'vAPARELHOID'},{av:'AV11OrdemServicoApareSeq',fld:'vORDEMSERVICOAPARESEQ'},{av:'AV44SdtOrdemServicoItem',fld:'vSDTORDEMSERVICOITEM'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Enabled")',ctrl:'vBMPFASE',prop:'Enabled'},{av:'AV31OrdemServicoAnt',fld:'vORDEMSERVICOANT'},{av:'AV61GXV1',fld:'vGXV1'},{av:'AV22GridOrdemServicoAparelhoId',fld:'vGRIDORDEMSERVICOAPARELHOID'},{av:'AV21GridOrdemServicoAparelhoDesc',fld:'vGRIDORDEMSERVICOAPARELHODESC'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV20GridOrdemServicoApareFaseDesc',fld:'vGRIDORDEMSERVICOAPAREFASEDESC'},{av:'AV8GridOrdemServicoProfissionalId',fld:'vGRIDORDEMSERVICOPROFISSIONALID'},{av:'AV9GridOrdemServicoProfissionalNome',fld:'vGRIDORDEMSERVICOPROFISSIONALNOME'},{av:'AV7GridOrdemServicoApareDtPrevisao',fld:'vGRIDORDEMSERVICOAPAREDTPREVISAO'},{av:'AV30GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOAPARELHODESC","Title")',ctrl:'vGRIDORDEMSERVICOAPARELHODESC',prop:'Title'},{av:'AV10GridOrdemServicoVlrTotal',fld:'vGRIDORDEMSERVICOVLRTOTAL'},{av:'AV49GridOrdemServicoVlrServicos',fld:'vGRIDORDEMSERVICOVLRSERVICOS'},{av:'AV50GridOrdemServicoVlrProdutos',fld:'vGRIDORDEMSERVICOVLRPRODUTOS'},{av:'AV48AttributeCor',fld:'vATTRIBUTECOR'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOID","Class")',ctrl:'vGRIDORDEMSERVICOID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOTIPODESCRICAO","Class")',ctrl:'vGRIDORDEMSERVICOTIPODESCRICAO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICODATAEMISSAO","Class")',ctrl:'vGRIDORDEMSERVICODATAEMISSAO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOFILIALID","Class")',ctrl:'vGRIDORDEMSERVICOFILIALID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOCLIENTEID","Class")',ctrl:'vGRIDORDEMSERVICOCLIENTEID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOCLIENTENOME","Class")',ctrl:'vGRIDORDEMSERVICOCLIENTENOME',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOAPARELHOID","Class")',ctrl:'vGRIDORDEMSERVICOAPARELHOID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOAPARELHODESC","Class")',ctrl:'vGRIDORDEMSERVICOAPARELHODESC',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOAPAREFASEDESC","Class")',ctrl:'vGRIDORDEMSERVICOAPAREFASEDESC',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOPROFISSIONALNOME","Class")',ctrl:'vGRIDORDEMSERVICOPROFISSIONALNOME',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOAPAREDTPREVISAO","Class")',ctrl:'vGRIDORDEMSERVICOAPAREDTPREVISAO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOVLRPRODUTOS","Class")',ctrl:'vGRIDORDEMSERVICOVLRPRODUTOS',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOVLRSERVICOS","Class")',ctrl:'vGRIDORDEMSERVICOVLRSERVICOS',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOVLRTOTAL","Class")',ctrl:'vGRIDORDEMSERVICOVLRTOTAL',prop:'Class'}]];
   this.EvtParms["'LISTAPROFISSIONAIS'"] = [[{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'AV28GridOrdemServicoId',fld:'vGRIDORDEMSERVICOID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV22GridOrdemServicoAparelhoId',fld:'vGRIDORDEMSERVICOAPARELHOID'},{av:'AV21GridOrdemServicoAparelhoDesc',fld:'vGRIDORDEMSERVICOAPARELHODESC'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'}],[{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV21GridOrdemServicoAparelhoDesc',fld:'vGRIDORDEMSERVICOAPARELHODESC'},{av:'AV22GridOrdemServicoAparelhoId',fld:'vGRIDORDEMSERVICOAPARELHOID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV28GridOrdemServicoId',fld:'vGRIDORDEMSERVICOID'},{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'TROCAFASE'"] = [[{av:'AV13ordemservicoid',fld:'vORDEMSERVICOID',hsh:true},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'}],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Visible")',ctrl:'vBMPPRO',prop:'Visible'},{av:'AV51BmpPro',fld:'vBMPPRO'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Tooltiptext")',ctrl:'vBMPPRO',prop:'Tooltiptext'},{av:'AV53bmpFase',fld:'vBMPFASE'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Tooltiptext")',ctrl:'vBMPFASE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOPROFISSIONALNOME","Visible")',ctrl:'vGRIDORDEMSERVICOPROFISSIONALNOME',prop:'Visible'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'AV13ordemservicoid',fld:'vORDEMSERVICOID',hsh:true},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'A8718OrdemServicoDatHoraEmissao',fld:'ORDEMSERVICODATHORAEMISSAO'},{av:'A8717OrdemServicoFilialId',fld:'ORDEMSERVICOFILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'},{av:'A8919OrdemServicoSituacao',fld:'ORDEMSERVICOSITUACAO'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8909OrdemServicoApareSeq',fld:'ORDEMSERVICOAPARESEQ'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8881OrdemServicoApareSNEntregue',fld:'ORDEMSERVICOAPARESNENTREGUE'},{av:'AV46ProAparelho',fld:'vPROAPARELHO'},{av:'AV14OrdemServicoProfissionalId',fld:'vORDEMSERVICOPROFISSIONALID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV15ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV16ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'A8882OrdemServicoApareDtPrevisao',fld:'ORDEMSERVICOAPAREDTPREVISAO'},{av:'AV42OrdemServicoOrdenacaoGrid',fld:'vORDEMSERVICOORDENACAOGRID'},{av:'AV18DesEquipamento',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV41OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'AV44SdtOrdemServicoItem',fld:'vSDTORDEMSERVICOITEM'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV30GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV48AttributeCor',fld:'vATTRIBUTECOR'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV50GridOrdemServicoVlrProdutos',fld:'vGRIDORDEMSERVICOVLRPRODUTOS'},{av:'A8757OSItemProdutoVlrTotal',fld:'OSITEMPRODUTOVLRTOTAL'},{av:'AV10GridOrdemServicoVlrTotal',fld:'vGRIDORDEMSERVICOVLRTOTAL'},{av:'AV49GridOrdemServicoVlrServicos',fld:'vGRIDORDEMSERVICOVLRSERVICOS'},{av:'A8761OSItemServicoVlrTotal',fld:'OSITEMSERVICOVLRTOTAL'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Visible")',ctrl:'vBMPPRO',prop:'Visible'},{av:'AV51BmpPro',fld:'vBMPPRO'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Tooltiptext")',ctrl:'vBMPPRO',prop:'Tooltiptext'},{av:'AV53bmpFase',fld:'vBMPFASE'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Tooltiptext")',ctrl:'vBMPFASE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOPROFISSIONALNOME","Visible")',ctrl:'vGRIDORDEMSERVICOPROFISSIONALNOME',prop:'Visible'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'AV13ordemservicoid',fld:'vORDEMSERVICOID',hsh:true},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'A8718OrdemServicoDatHoraEmissao',fld:'ORDEMSERVICODATHORAEMISSAO'},{av:'A8717OrdemServicoFilialId',fld:'ORDEMSERVICOFILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'},{av:'A8919OrdemServicoSituacao',fld:'ORDEMSERVICOSITUACAO'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8909OrdemServicoApareSeq',fld:'ORDEMSERVICOAPARESEQ'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8881OrdemServicoApareSNEntregue',fld:'ORDEMSERVICOAPARESNENTREGUE'},{av:'AV46ProAparelho',fld:'vPROAPARELHO'},{av:'AV14OrdemServicoProfissionalId',fld:'vORDEMSERVICOPROFISSIONALID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV15ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV16ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'A8882OrdemServicoApareDtPrevisao',fld:'ORDEMSERVICOAPAREDTPREVISAO'},{av:'AV42OrdemServicoOrdenacaoGrid',fld:'vORDEMSERVICOORDENACAOGRID'},{av:'AV18DesEquipamento',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV41OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'AV44SdtOrdemServicoItem',fld:'vSDTORDEMSERVICOITEM'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV30GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV48AttributeCor',fld:'vATTRIBUTECOR'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV50GridOrdemServicoVlrProdutos',fld:'vGRIDORDEMSERVICOVLRPRODUTOS'},{av:'A8757OSItemProdutoVlrTotal',fld:'OSITEMPRODUTOVLRTOTAL'},{av:'AV10GridOrdemServicoVlrTotal',fld:'vGRIDORDEMSERVICOVLRTOTAL'},{av:'AV49GridOrdemServicoVlrServicos',fld:'vGRIDORDEMSERVICOVLRSERVICOS'},{av:'A8761OSItemServicoVlrTotal',fld:'OSITEMSERVICOVLRTOTAL'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Visible")',ctrl:'vBMPPRO',prop:'Visible'},{av:'AV51BmpPro',fld:'vBMPPRO'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Tooltiptext")',ctrl:'vBMPPRO',prop:'Tooltiptext'},{av:'AV53bmpFase',fld:'vBMPFASE'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Tooltiptext")',ctrl:'vBMPFASE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOPROFISSIONALNOME","Visible")',ctrl:'vGRIDORDEMSERVICOPROFISSIONALNOME',prop:'Visible'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'AV13ordemservicoid',fld:'vORDEMSERVICOID',hsh:true},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'A8718OrdemServicoDatHoraEmissao',fld:'ORDEMSERVICODATHORAEMISSAO'},{av:'A8717OrdemServicoFilialId',fld:'ORDEMSERVICOFILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'},{av:'A8919OrdemServicoSituacao',fld:'ORDEMSERVICOSITUACAO'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8909OrdemServicoApareSeq',fld:'ORDEMSERVICOAPARESEQ'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8881OrdemServicoApareSNEntregue',fld:'ORDEMSERVICOAPARESNENTREGUE'},{av:'AV46ProAparelho',fld:'vPROAPARELHO'},{av:'AV14OrdemServicoProfissionalId',fld:'vORDEMSERVICOPROFISSIONALID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV15ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV16ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'A8882OrdemServicoApareDtPrevisao',fld:'ORDEMSERVICOAPAREDTPREVISAO'},{av:'AV42OrdemServicoOrdenacaoGrid',fld:'vORDEMSERVICOORDENACAOGRID'},{av:'AV18DesEquipamento',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV41OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'AV44SdtOrdemServicoItem',fld:'vSDTORDEMSERVICOITEM'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV30GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV48AttributeCor',fld:'vATTRIBUTECOR'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV50GridOrdemServicoVlrProdutos',fld:'vGRIDORDEMSERVICOVLRPRODUTOS'},{av:'A8757OSItemProdutoVlrTotal',fld:'OSITEMPRODUTOVLRTOTAL'},{av:'AV10GridOrdemServicoVlrTotal',fld:'vGRIDORDEMSERVICOVLRTOTAL'},{av:'AV49GridOrdemServicoVlrServicos',fld:'vGRIDORDEMSERVICOVLRSERVICOS'},{av:'A8761OSItemServicoVlrTotal',fld:'OSITEMSERVICOVLRTOTAL'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Visible")',ctrl:'vBMPPRO',prop:'Visible'},{av:'AV51BmpPro',fld:'vBMPPRO'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Tooltiptext")',ctrl:'vBMPPRO',prop:'Tooltiptext'},{av:'AV53bmpFase',fld:'vBMPFASE'},{av:'gx.fn.getCtrlProperty("vBMPFASE","Tooltiptext")',ctrl:'vBMPFASE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOPROFISSIONALNOME","Visible")',ctrl:'vGRIDORDEMSERVICOPROFISSIONALNOME',prop:'Visible'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'AV13ordemservicoid',fld:'vORDEMSERVICOID',hsh:true},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'AV12OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID'},{av:'A8718OrdemServicoDatHoraEmissao',fld:'ORDEMSERVICODATHORAEMISSAO'},{av:'A8717OrdemServicoFilialId',fld:'ORDEMSERVICOFILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'},{av:'A8919OrdemServicoSituacao',fld:'ORDEMSERVICOSITUACAO'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8909OrdemServicoApareSeq',fld:'ORDEMSERVICOAPARESEQ'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8881OrdemServicoApareSNEntregue',fld:'ORDEMSERVICOAPARESNENTREGUE'},{av:'AV46ProAparelho',fld:'vPROAPARELHO'},{av:'AV14OrdemServicoProfissionalId',fld:'vORDEMSERVICOPROFISSIONALID'},{av:'AV5AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV15ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV16ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'A8882OrdemServicoApareDtPrevisao',fld:'ORDEMSERVICOAPAREDTPREVISAO'},{av:'AV42OrdemServicoOrdenacaoGrid',fld:'vORDEMSERVICOORDENACAOGRID'},{av:'AV18DesEquipamento',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV41OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'AV44SdtOrdemServicoItem',fld:'vSDTORDEMSERVICOITEM'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV30GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV48AttributeCor',fld:'vATTRIBUTECOR'},{av:'AV23GridOrdemServicoAparelhoSeq',fld:'vGRIDORDEMSERVICOAPARELHOSEQ'},{av:'AV50GridOrdemServicoVlrProdutos',fld:'vGRIDORDEMSERVICOVLRPRODUTOS'},{av:'A8757OSItemProdutoVlrTotal',fld:'OSITEMPRODUTOVLRTOTAL'},{av:'AV10GridOrdemServicoVlrTotal',fld:'vGRIDORDEMSERVICOVLRTOTAL'},{av:'AV49GridOrdemServicoVlrServicos',fld:'vGRIDORDEMSERVICOVLRSERVICOS'},{av:'A8761OSItemServicoVlrTotal',fld:'OSITEMSERVICOVLRTOTAL'}],[]];
   this.setVCMap("A8760OSItemServicoVlrUnitario", "OSITEMSERVICOVLRUNITARIO", 0, "decimal");
   this.setVCMap("A8759OSItemServicoQuantidade", "OSITEMSERVICOQUANTIDADE", 0, "decimal");
   this.setVCMap("A9050OSItemServicoVlrDesconto", "OSITEMSERVICOVLRDESCONTO", 0, "decimal");
   this.setVCMap("A8761OSItemServicoVlrTotal", "OSITEMSERVICOVLRTOTAL", 0, "decimal");
   this.setVCMap("A8755OSItemProdutoQuantidade", "OSITEMPRODUTOQUANTIDADE", 0, "decimal");
   this.setVCMap("A8756OSItemProdutoVlrUnitario", "OSITEMPRODUTOVLRUNITARIO", 0, "decimal");
   this.setVCMap("A9049OSItemProdutoVlrDesconto", "OSITEMPRODUTOVLRDESCONTO", 0, "decimal");
   this.setVCMap("A8757OSItemProdutoVlrTotal", "OSITEMPRODUTOVLRTOTAL", 0, "decimal");
   this.setVCMap("A8792OrdemServicoId", "ORDEMSERVICOID", 0, "int");
   this.setVCMap("AV13ordemservicoid", "vORDEMSERVICOID", 0, "int");
   this.setVCMap("A8791OrdemServicoEmpresaId", "ORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("AV12OrdemServicoEmpresaId", "vORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("A8718OrdemServicoDatHoraEmissao", "ORDEMSERVICODATHORAEMISSAO", 0, "dtime");
   this.setVCMap("A8717OrdemServicoFilialId", "ORDEMSERVICOFILIALID", 0, "int");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A8675OrdemServicoTipoDescricao", "ORDEMSERVICOTIPODESCRICAO", 0, "svchar");
   this.setVCMap("A8919OrdemServicoSituacao", "ORDEMSERVICOSITUACAO", 0, "char");
   this.setVCMap("A8825AparelhoId", "APARELHOID", 0, "int");
   this.setVCMap("A8909OrdemServicoApareSeq", "ORDEMSERVICOAPARESEQ", 0, "int");
   this.setVCMap("A8824AparelhoEmpresaId", "APARELHOEMPRESAID", 0, "char");
   this.setVCMap("A8821AparelhoDescricao", "APARELHODESCRICAO", 0, "svchar");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("A8881OrdemServicoApareSNEntregue", "ORDEMSERVICOAPARESNENTREGUE", 0, "char");
   this.setVCMap("AV46ProAparelho", "vPROAPARELHO", 0, "char");
   this.setVCMap("AV14OrdemServicoProfissionalId", "vORDEMSERVICOPROFISSIONALID", 0, "int");
   this.setVCMap("AV5AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("A8566ProfissionalId", "PROFISSIONALID", 0, "int");
   this.setVCMap("A8608ProfissionalNome", "PROFISSIONALNOME", 0, "svchar");
   this.setVCMap("AV15ProfissionalId", "vPROFISSIONALID", 0, "int");
   this.setVCMap("AV16ProfissionalNome", "vPROFISSIONALNOME", 0, "svchar");
   this.setVCMap("A8882OrdemServicoApareDtPrevisao", "ORDEMSERVICOAPAREDTPREVISAO", 0, "date");
   this.setVCMap("AV42OrdemServicoOrdenacaoGrid", "vORDEMSERVICOORDENACAOGRID", 0, "int");
   this.setVCMap("AV18DesEquipamento", "vDESEQUIPAMENTO", 0, "svchar");
   this.setVCMap("A8606OrdemServicoFaseEmpresaId", "ORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV41OrdemServicoFaseEmpresaId", "vORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV44SdtOrdemServicoItem", "vSDTORDEMSERVICOITEM", 0, "ConsultarOrdemServico.ConsultarOrdemServicoItem");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   this.setVCMap("A8602OrdemServicoFaseCorLetra", "ORDEMSERVICOFASECORLETRA", 0, "int");
   this.setVCMap("AV30GridTipoFaseCor", "vGRIDTIPOFASECOR", 0, "int");
   this.setVCMap("AV48AttributeCor", "vATTRIBUTECOR", 0, "svchar");
   this.setVCMap("A8757OSItemProdutoVlrTotal", "OSITEMPRODUTOVLRTOTAL", 0, "decimal");
   this.setVCMap("A8761OSItemServicoVlrTotal", "OSITEMSERVICOVLRTOTAL", 0, "decimal");
   this.setVCMap("A8792OrdemServicoId", "ORDEMSERVICOID", 0, "int");
   this.setVCMap("AV13ordemservicoid", "vORDEMSERVICOID", 0, "int");
   this.setVCMap("A8791OrdemServicoEmpresaId", "ORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("AV12OrdemServicoEmpresaId", "vORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("A8718OrdemServicoDatHoraEmissao", "ORDEMSERVICODATHORAEMISSAO", 0, "dtime");
   this.setVCMap("A8717OrdemServicoFilialId", "ORDEMSERVICOFILIALID", 0, "int");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A8675OrdemServicoTipoDescricao", "ORDEMSERVICOTIPODESCRICAO", 0, "svchar");
   this.setVCMap("A8919OrdemServicoSituacao", "ORDEMSERVICOSITUACAO", 0, "char");
   this.setVCMap("A8825AparelhoId", "APARELHOID", 0, "int");
   this.setVCMap("A8909OrdemServicoApareSeq", "ORDEMSERVICOAPARESEQ", 0, "int");
   this.setVCMap("A8824AparelhoEmpresaId", "APARELHOEMPRESAID", 0, "char");
   this.setVCMap("A8821AparelhoDescricao", "APARELHODESCRICAO", 0, "svchar");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("A8881OrdemServicoApareSNEntregue", "ORDEMSERVICOAPARESNENTREGUE", 0, "char");
   this.setVCMap("AV46ProAparelho", "vPROAPARELHO", 0, "char");
   this.setVCMap("AV14OrdemServicoProfissionalId", "vORDEMSERVICOPROFISSIONALID", 0, "int");
   this.setVCMap("AV5AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("A8566ProfissionalId", "PROFISSIONALID", 0, "int");
   this.setVCMap("A8608ProfissionalNome", "PROFISSIONALNOME", 0, "svchar");
   this.setVCMap("AV15ProfissionalId", "vPROFISSIONALID", 0, "int");
   this.setVCMap("AV16ProfissionalNome", "vPROFISSIONALNOME", 0, "svchar");
   this.setVCMap("A8882OrdemServicoApareDtPrevisao", "ORDEMSERVICOAPAREDTPREVISAO", 0, "date");
   this.setVCMap("AV42OrdemServicoOrdenacaoGrid", "vORDEMSERVICOORDENACAOGRID", 0, "int");
   this.setVCMap("AV18DesEquipamento", "vDESEQUIPAMENTO", 0, "svchar");
   this.setVCMap("A8606OrdemServicoFaseEmpresaId", "ORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV41OrdemServicoFaseEmpresaId", "vORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV44SdtOrdemServicoItem", "vSDTORDEMSERVICOITEM", 0, "ConsultarOrdemServico.ConsultarOrdemServicoItem");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   this.setVCMap("A8602OrdemServicoFaseCorLetra", "ORDEMSERVICOFASECORLETRA", 0, "int");
   this.setVCMap("AV30GridTipoFaseCor", "vGRIDTIPOFASECOR", 0, "int");
   this.setVCMap("AV48AttributeCor", "vATTRIBUTECOR", 0, "svchar");
   this.setVCMap("A8757OSItemProdutoVlrTotal", "OSITEMPRODUTOVLRTOTAL", 0, "decimal");
   this.setVCMap("A8761OSItemServicoVlrTotal", "OSITEMSERVICOVLRTOTAL", 0, "decimal");
   GridContainer.addRefreshingVar({rfrVar:"AV51BmpPro", rfrProp:"Visible", gxAttId:"Bmppro"});
   GridContainer.addRefreshingVar({rfrVar:"AV51BmpPro", rfrProp:"Value", gxAttId:"Bmppro"});
   GridContainer.addRefreshingVar({rfrVar:"AV51BmpPro", rfrProp:"Tooltiptext", gxAttId:"Bmppro"});
   GridContainer.addRefreshingVar({rfrVar:"AV53bmpFase", rfrProp:"Value", gxAttId:"Bmpfase"});
   GridContainer.addRefreshingVar({rfrVar:"AV53bmpFase", rfrProp:"Tooltiptext", gxAttId:"Bmpfase"});
   GridContainer.addRefreshingVar({rfrVar:"AV9GridOrdemServicoProfissionalNome", rfrProp:"Visible", gxAttId:"Gridordemservicoprofissionalnome"});
   GridContainer.addRefreshingVar({rfrVar:"A8792OrdemServicoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV13ordemservicoid"});
   GridContainer.addRefreshingVar({rfrVar:"A8791OrdemServicoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV12OrdemServicoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A8718OrdemServicoDatHoraEmissao"});
   GridContainer.addRefreshingVar({rfrVar:"A8717OrdemServicoFilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A8675OrdemServicoTipoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A8919OrdemServicoSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A8825AparelhoId"});
   GridContainer.addRefreshingVar({rfrVar:"A8909OrdemServicoApareSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A8824AparelhoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A8821AparelhoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A8607OrdemServicoFaseId"});
   GridContainer.addRefreshingVar({rfrVar:"A8881OrdemServicoApareSNEntregue"});
   GridContainer.addRefreshingVar({rfrVar:"AV46ProAparelho"});
   GridContainer.addRefreshingVar({rfrVar:"AV14OrdemServicoProfissionalId"});
   GridContainer.addRefreshingVar({rfrVar:"AV5AparelhoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A8566ProfissionalId"});
   GridContainer.addRefreshingVar({rfrVar:"A8608ProfissionalNome"});
   GridContainer.addRefreshingVar({rfrVar:"AV15ProfissionalId"});
   GridContainer.addRefreshingVar({rfrVar:"AV16ProfissionalNome"});
   GridContainer.addRefreshingVar({rfrVar:"A8882OrdemServicoApareDtPrevisao"});
   GridContainer.addRefreshingVar({rfrVar:"AV42OrdemServicoOrdenacaoGrid"});
   GridContainer.addRefreshingVar({rfrVar:"AV18DesEquipamento"});
   GridContainer.addRefreshingVar({rfrVar:"A8606OrdemServicoFaseEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV41OrdemServicoFaseEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV44SdtOrdemServicoItem"});
   GridContainer.addRefreshingVar({rfrVar:"A8600OrdemServicoFaseDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A8602OrdemServicoFaseCorLetra"});
   GridContainer.addRefreshingVar({rfrVar:"AV30GridTipoFaseCor"});
   GridContainer.addRefreshingVar({rfrVar:"AV48AttributeCor"});
   GridContainer.addRefreshingVar({rfrVar:"AV23GridOrdemServicoAparelhoSeq", rfrProp:"Value", gxAttId:"Gridordemservicoaparelhoseq"});
   GridContainer.addRefreshingVar({rfrVar:"AV50GridOrdemServicoVlrProdutos", rfrProp:"Value", gxAttId:"Gridordemservicovlrprodutos"});
   GridContainer.addRefreshingVar({rfrVar:"A8757OSItemProdutoVlrTotal"});
   GridContainer.addRefreshingVar({rfrVar:"AV10GridOrdemServicoVlrTotal", rfrProp:"Value", gxAttId:"Gridordemservicovlrtotal"});
   GridContainer.addRefreshingVar({rfrVar:"AV49GridOrdemServicoVlrServicos", rfrProp:"Value", gxAttId:"Gridordemservicovlrservicos"});
   GridContainer.addRefreshingVar({rfrVar:"A8761OSItemServicoVlrTotal"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpromptlistaaparelhosos());
