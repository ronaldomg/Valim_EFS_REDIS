/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:17:30.78
*/
gx.evt.autoSkip = false;
gx.define('hconsultaordemservicoocorrencia', false, function () {
   this.ServerClass =  "hconsultaordemservicoocorrencia" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV13DESEQUIPAMENTO=gx.fn.getControlValue("vDESEQUIPAMENTO") ;
      this.A8824AparelhoEmpresaId=gx.fn.getControlValue("APARELHOEMPRESAID") ;
      this.AV33GridAparelhoEmpId=gx.fn.getControlValue("vGRIDAPARELHOEMPID") ;
      this.A8825AparelhoId=gx.fn.getIntegerValue("APARELHOID",'.') ;
      this.AV32GridAparelhoId=gx.fn.getIntegerValue("vGRIDAPARELHOID",'.') ;
      this.A8821AparelhoDescricao=gx.fn.getControlValue("APARELHODESCRICAO") ;
      this.A8606OrdemServicoFaseEmpresaId=gx.fn.getControlValue("ORDEMSERVICOFASEEMPRESAID") ;
      this.AV35GridFaseEmpId=gx.fn.getControlValue("vGRIDFASEEMPID") ;
      this.A8607OrdemServicoFaseId=gx.fn.getIntegerValue("ORDEMSERVICOFASEID",'.') ;
      this.AV34GridFaseId=gx.fn.getIntegerValue("vGRIDFASEID",'.') ;
      this.A8600OrdemServicoFaseDescricao=gx.fn.getControlValue("ORDEMSERVICOFASEDESCRICAO") ;
      this.A8602OrdemServicoFaseCorLetra=gx.fn.getIntegerValue("ORDEMSERVICOFASECORLETRA",'.') ;
      this.A8567ProfissionalEmpresaId=gx.fn.getControlValue("PROFISSIONALEMPRESAID") ;
      this.AV41OSOcorrenciaProfissionalEmpId=gx.fn.getControlValue("vOSOCORRENCIAPROFISSIONALEMPID") ;
      this.A8566ProfissionalId=gx.fn.getIntegerValue("PROFISSIONALID",'.') ;
      this.AV40OSOcorrenciaProfissionalId=gx.fn.getIntegerValue("vOSOCORRENCIAPROFISSIONALID",'.') ;
      this.A8608ProfissionalNome=gx.fn.getControlValue("PROFISSIONALNOME") ;
      this.AV39GridTipoFaseCor=gx.fn.getIntegerValue("vGRIDTIPOFASECOR",'.') ;
      this.AV51Classecor=gx.fn.getControlValue("vCLASSECOR") ;
      this.AV26ParOrdemServicoApareSeq=gx.fn.getIntegerValue("vPARORDEMSERVICOAPARESEQ",'.') ;
      this.AV27ParAparelhoId=gx.fn.getIntegerValue("vPARAPARELHOID",'.') ;
      this.AV28ParAparelhoDescricao=gx.fn.getControlValue("vPARAPARELHODESCRICAO") ;
      this.AV38OrdemServicoSituacao=gx.fn.getControlValue("vORDEMSERVICOSITUACAO") ;
      this.AV42OrdemServicoApareSNEntregue=gx.fn.getControlValue("vORDEMSERVICOAPARESNENTREGUE") ;
   };
   this.Validv_Ordemservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Aparelhoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAPARELHOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
      if ( this.AV39GridTipoFaseCor == 1 )
      {
         this.AV51Classecor =  "AttributeCorVermelho"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 2 )
      {
         this.AV51Classecor =  "AttributeCorLaranja"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 3 )
      {
         this.AV51Classecor =  "AttributeCorAmarelo"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 4 )
      {
         this.AV51Classecor =  "AttributeCorVerde"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 5 )
      {
         this.AV51Classecor =  "AttributeCorAqua"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 6 )
      {
         this.AV51Classecor =  "AttributeCorAzul"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 7 )
      {
         this.AV51Classecor =  "AttributeCorRosa"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 8 )
      {
         this.AV51Classecor =  "AttributeCorCinza"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 9 )
      {
         this.AV51Classecor =  "AttributeCorPreto"  ;
      }
      else if ( this.AV39GridTipoFaseCor == 10 )
      {
         this.AV51Classecor =  "AttributeCorMarrom"  ;
      }
      gx.fn.setCtrlProperty("ORDEMSERVICOOCORRENCIASEQ","Class", this.AV51Classecor );
      gx.fn.setCtrlProperty("vGRIDAPARELHODES","Class", this.AV51Classecor );
      gx.fn.setCtrlProperty("vGRIDFASEDESCRICAO","Class", this.AV51Classecor );
      gx.fn.setCtrlProperty("vGRIDPROFISSINALNOME","Class", this.AV51Classecor );
      gx.fn.setCtrlProperty("vGRIDORDEMSERVICOOCORRENCIAOBS","Class", this.AV51Classecor );
      gx.fn.setCtrlProperty("ORDEMSERVICOOCORRENCIADTHR","Class", this.AV51Classecor );
      gx.fn.setCtrlProperty("ORDEMSERVICOOCORRENCIAUSU","Class", this.AV51Classecor );
   };
   this.s162_client=function()
   {
      if ( (""==this.AV37GridOrdemServicoOcorrenciaObs) )
      {
         gx.popup.openUrl(gx.http.formatLink("hordemservicoocorrencia",[this.AV29GridAparelhoDes, this.AV30GridFaseDescricao, this.AV31GridProfissinalNome, this.A8808OrdemServicoOcorrenciaDtHr, this.A9106OrdemServicoOcorrenciaOSEmpId, this.A9107OrdemServicoOcorrenciaOSId, this.A9108OrdemServicoOcorrenciaApaEmpId, this.A9109OrdemServicoOcorrenciaApaId, this.A9110OrdemServicoOcorrenciaApaSeq, this.A8814OrdemServicoOcorrenciaSeq, "N", this.AV38OrdemServicoSituacao, this.AV42OrdemServicoApareSNEntregue, "", ""]), ["AV29GridAparelhoDes", "AV30GridFaseDescricao", "AV31GridProfissinalNome", "A8808OrdemServicoOcorrenciaDtHr", "A9106OrdemServicoOcorrenciaOSEmpId", "A9107OrdemServicoOcorrenciaOSId", "A9108OrdemServicoOcorrenciaApaEmpId", "A9109OrdemServicoOcorrenciaApaId", "A9110OrdemServicoOcorrenciaApaSeq", "A8814OrdemServicoOcorrenciaSeq", "", "AV38OrdemServicoSituacao", "AV42OrdemServicoApareSNEntregue", "", ""]);
      }
      else
      {
         gx.popup.openUrl(gx.http.formatLink("hordemservicoocorrencia",[this.AV29GridAparelhoDes, this.AV30GridFaseDescricao, this.AV31GridProfissinalNome, this.A8808OrdemServicoOcorrenciaDtHr, this.A9106OrdemServicoOcorrenciaOSEmpId, this.A9107OrdemServicoOcorrenciaOSId, this.A9108OrdemServicoOcorrenciaApaEmpId, this.A9109OrdemServicoOcorrenciaApaId, this.A9110OrdemServicoOcorrenciaApaSeq, this.A8814OrdemServicoOcorrenciaSeq, "S", this.AV38OrdemServicoSituacao, this.AV42OrdemServicoApareSNEntregue, "", ""]), ["AV29GridAparelhoDes", "AV30GridFaseDescricao", "AV31GridProfissinalNome", "A8808OrdemServicoOcorrenciaDtHr", "A9106OrdemServicoOcorrenciaOSEmpId", "A9107OrdemServicoOcorrenciaOSId", "A9108OrdemServicoOcorrenciaApaEmpId", "A9109OrdemServicoOcorrenciaApaId", "A9110OrdemServicoOcorrenciaApaSeq", "A8814OrdemServicoOcorrenciaSeq", "", "AV38OrdemServicoSituacao", "AV42OrdemServicoApareSNEntregue", "", ""]);
      }
   };
   this.e111d72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141d72_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e151d71_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161d72_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,20,21,24,26,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaordemservicoocorrencia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8814,35,"ORDEMSERVICOOCORRENCIASEQ","Seq.","","OrdemServicoOcorrenciaSeq","int",0,"px",4,4,"right",null,[],8814,"OrdemServicoOcorrenciaSeq",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(9110,36,"ORDEMSERVICOOCORRENCIAAPASEQ","Seq. Aparelho","","OrdemServicoOcorrenciaApaSeq","int",0,"px",2,2,"right",null,[],9110,"OrdemServicoOcorrenciaApaSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9109,37,"ORDEMSERVICOOCORRENCIAAPAID","Aparelho","","OrdemServicoOcorrenciaApaId","int",0,"px",4,4,"right",null,[],9109,"OrdemServicoOcorrenciaApaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Gridaparelhodes",38,"vGRIDAPARELHODES","","","GridAparelhoDes","svchar",0,"px",30,30,"left",null,[],"Gridaparelhodes","GridAparelhoDes",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(8813,39,"ORDEMSERVICOOCORRENCIAFASE","Fase","","OrdemServicoOcorrenciaFase","int",0,"px",2,2,"right",null,[],8813,"OrdemServicoOcorrenciaFase",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Gridfasedescricao",40,"vGRIDFASEDESCRICAO","Fase","","GridFaseDescricao","svchar",0,"px",30,30,"left",null,[],"Gridfasedescricao","GridFaseDescricao",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(8812,41,"OSOCORRENCIAPROFISSIONALID","Profissional","","OSOcorrenciaProfissionalId","int",0,"px",4,4,"right",null,[],8812,"OSOcorrenciaProfissionalId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Gridprofissinalnome",42,"vGRIDPROFISSINALNOME","Profissional","","GridProfissinalNome","svchar",0,"px",30,30,"left",null,[],"Gridprofissinalnome","GridProfissinalNome",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(8810,43,"ORDEMSERVICOOCORRENCIAOBS","Observação","","OrdemServicoOcorrenciaObs","vchar",0,"px",1000,80,"left",null,[],8810,"OrdemServicoOcorrenciaObs",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Gridordemservicoocorrenciaobs",44,"vGRIDORDEMSERVICOOCORRENCIAOBS","Observação","","GridOrdemServicoOcorrenciaObs","vchar",0,"px",30,30,"left",null,[],"Gridordemservicoocorrenciaobs","GridOrdemServicoOcorrenciaObs",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(8808,45,"ORDEMSERVICOOCORRENCIADTHR","Data/Hora","","OrdemServicoOcorrenciaDtHr","dtime",0,"px",16,16,"right",null,[],8808,"OrdemServicoOcorrenciaDtHr",true,5,false,false,"",1,"");
   GridContainer.addSingleLineEdit(8809,46,"ORDEMSERVICOOCORRENCIAUSU","Usuário","","OrdemServicoOcorrenciaUsu","char",0,"px",12,12,"left",null,[],8809,"OrdemServicoOcorrenciaUsu",true,0,false,false,"",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",47,0,"px",17,"px","e141d72_client","","Alt","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(9108,48,"ORDEMSERVICOOCORRENCIAAPAEMPID","Empresa do Aparelho","","OrdemServicoOcorrenciaApaEmpId","char",0,"px",10,10,"left",null,[],9108,"OrdemServicoOcorrenciaApaEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9105,49,"ORDEMSERVICOOCORRENCIAFASEEPID","Empresa da Fase","","OrdemServicoOcorrenciaFaseEpId","char",0,"px",10,10,"left",null,[],9105,"OrdemServicoOcorrenciaFaseEpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9106,50,"ORDEMSERVICOOCORRENCIAOSEMPID","Empresa da Ordem de Serviço","","OrdemServicoOcorrenciaOSEmpId","char",0,"px",10,10,"left",null,[],9106,"OrdemServicoOcorrenciaOSEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9107,51,"ORDEMSERVICOOCORRENCIAOSID","Numero da Ordem de Serviço","","OrdemServicoOcorrenciaOSId","int",0,"px",9,9,"right",null,[],9107,"OrdemServicoOcorrenciaOSId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8811,52,"OSOCORRENCIAPROFISSIONALEMPID","Empresa do Profissional","","OSOcorrenciaProfissionalEmpId","char",0,"px",10,10,"left",null,[],8811,"OSOcorrenciaProfissionalEmpId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOID",gxz:"ZV23OrdemServicoId",gxold:"OV23OrdemServicoId",gxvar:"AV23OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23OrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV23OrdemServicoId,0)},c2v:function(){gx.O.AV23OrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Aparelhoempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOEMPRESAID",gxz:"ZV15AparelhoEmpresaId",gxold:"OV15AparelhoEmpresaId",gxvar:"AV15AparelhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AparelhoEmpresaId=Value},v2z:function(Value){gx.O.ZV15AparelhoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOEMPRESAID",gx.O.AV15AparelhoEmpresaId,0)},c2v:function(){gx.O.AV15AparelhoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TBAPARELHO", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOID",gxz:"ZV21AparelhoId",gxold:"OV21AparelhoId",gxvar:"AV21AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOID",gx.O.AV21AparelhoId,0)},c2v:function(){gx.O.AV21AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV22AparelhoDescricao",gxold:"OV22AparelhoDescricao",gxvar:"AV22AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV22AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV22AparelhoDescricao,0)},c2v:function(){gx.O.AV22AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TBSEQUENCIA", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOAPARESEQ",gxz:"ZV24OrdemServicoApareSeq",gxold:"OV24OrdemServicoApareSeq",gxvar:"AV24OrdemServicoApareSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24OrdemServicoApareSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24OrdemServicoApareSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARESEQ",gx.O.AV24OrdemServicoApareSeq,0)},c2v:function(){gx.O.AV24OrdemServicoApareSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[35]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIASEQ",gxz:"Z8814OrdemServicoOcorrenciaSeq",gxold:"O8814OrdemServicoOcorrenciaSeq",gxvar:"A8814OrdemServicoOcorrenciaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8814OrdemServicoOcorrenciaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8814OrdemServicoOcorrenciaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIASEQ",row || gx.fn.currentGridRowImpl(34),gx.O.A8814OrdemServicoOcorrenciaSeq,0)},c2v:function(){gx.O.A8814OrdemServicoOcorrenciaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOOCORRENCIASEQ",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAAPASEQ",gxz:"Z9110OrdemServicoOcorrenciaApaSeq",gxold:"O9110OrdemServicoOcorrenciaApaSeq",gxvar:"A9110OrdemServicoOcorrenciaApaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9110OrdemServicoOcorrenciaApaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9110OrdemServicoOcorrenciaApaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAAPASEQ",row || gx.fn.currentGridRowImpl(34),gx.O.A9110OrdemServicoOcorrenciaApaSeq,0)},c2v:function(){gx.O.A9110OrdemServicoOcorrenciaApaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOOCORRENCIAAPASEQ",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAAPAID",gxz:"Z9109OrdemServicoOcorrenciaApaId",gxold:"O9109OrdemServicoOcorrenciaApaId",gxvar:"A9109OrdemServicoOcorrenciaApaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9109OrdemServicoOcorrenciaApaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9109OrdemServicoOcorrenciaApaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAAPAID",row || gx.fn.currentGridRowImpl(34),gx.O.A9109OrdemServicoOcorrenciaApaId,0)},c2v:function(){gx.O.A9109OrdemServicoOcorrenciaApaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOOCORRENCIAAPAID",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDAPARELHODES",gxz:"ZV29GridAparelhoDes",gxold:"OV29GridAparelhoDes",gxvar:"AV29GridAparelhoDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29GridAparelhoDes=Value},v2z:function(Value){gx.O.ZV29GridAparelhoDes=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDAPARELHODES",row || gx.fn.currentGridRowImpl(34),gx.O.AV29GridAparelhoDes,0)},c2v:function(){gx.O.AV29GridAparelhoDes=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDAPARELHODES",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAFASE",gxz:"Z8813OrdemServicoOcorrenciaFase",gxold:"O8813OrdemServicoOcorrenciaFase",gxvar:"A8813OrdemServicoOcorrenciaFase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8813OrdemServicoOcorrenciaFase=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8813OrdemServicoOcorrenciaFase=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAFASE",row || gx.fn.currentGridRowImpl(34),gx.O.A8813OrdemServicoOcorrenciaFase,0)},c2v:function(){gx.O.A8813OrdemServicoOcorrenciaFase=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOOCORRENCIAFASE",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDFASEDESCRICAO",gxz:"ZV30GridFaseDescricao",gxold:"OV30GridFaseDescricao",gxvar:"AV30GridFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30GridFaseDescricao=Value},v2z:function(Value){gx.O.ZV30GridFaseDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDFASEDESCRICAO",row || gx.fn.currentGridRowImpl(34),gx.O.AV30GridFaseDescricao,0)},c2v:function(){gx.O.AV30GridFaseDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDFASEDESCRICAO",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OSOCORRENCIAPROFISSIONALID",gxz:"Z8812OSOcorrenciaProfissionalId",gxold:"O8812OSOcorrenciaProfissionalId",gxvar:"A8812OSOcorrenciaProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8812OSOcorrenciaProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8812OSOcorrenciaProfissionalId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OSOCORRENCIAPROFISSIONALID",row || gx.fn.currentGridRowImpl(34),gx.O.A8812OSOcorrenciaProfissionalId,0)},c2v:function(){gx.O.A8812OSOcorrenciaProfissionalId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OSOCORRENCIAPROFISSIONALID",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDPROFISSINALNOME",gxz:"ZV31GridProfissinalNome",gxold:"OV31GridProfissinalNome",gxvar:"AV31GridProfissinalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31GridProfissinalNome=Value},v2z:function(Value){gx.O.ZV31GridProfissinalNome=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDPROFISSINALNOME",row || gx.fn.currentGridRowImpl(34),gx.O.AV31GridProfissinalNome,0)},c2v:function(){gx.O.AV31GridProfissinalNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDPROFISSINALNOME",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"vchar",len:1000,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOBS",gxz:"Z8810OrdemServicoOcorrenciaObs",gxold:"O8810OrdemServicoOcorrenciaObs",gxvar:"A8810OrdemServicoOcorrenciaObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8810OrdemServicoOcorrenciaObs=Value},v2z:function(Value){gx.O.Z8810OrdemServicoOcorrenciaObs=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAOBS",row || gx.fn.currentGridRowImpl(34),gx.O.A8810OrdemServicoOcorrenciaObs,0)},c2v:function(){gx.O.A8810OrdemServicoOcorrenciaObs=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOOCORRENCIAOBS",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"vchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDORDEMSERVICOOCORRENCIAOBS",gxz:"ZV37GridOrdemServicoOcorrenciaObs",gxold:"OV37GridOrdemServicoOcorrenciaObs",gxvar:"AV37GridOrdemServicoOcorrenciaObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37GridOrdemServicoOcorrenciaObs=Value},v2z:function(Value){gx.O.ZV37GridOrdemServicoOcorrenciaObs=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDORDEMSERVICOOCORRENCIAOBS",row || gx.fn.currentGridRowImpl(34),gx.O.AV37GridOrdemServicoOcorrenciaObs,0)},c2v:function(){gx.O.AV37GridOrdemServicoOcorrenciaObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDORDEMSERVICOOCORRENCIAOBS",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIADTHR",gxz:"Z8808OrdemServicoOcorrenciaDtHr",gxold:"O8808OrdemServicoOcorrenciaDtHr",gxvar:"A8808OrdemServicoOcorrenciaDtHr",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8808OrdemServicoOcorrenciaDtHr=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8808OrdemServicoOcorrenciaDtHr=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIADTHR",row || gx.fn.currentGridRowImpl(34),gx.O.A8808OrdemServicoOcorrenciaDtHr,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8808OrdemServicoOcorrenciaDtHr=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ORDEMSERVICOOCORRENCIADTHR",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAUSU",gxz:"Z8809OrdemServicoOcorrenciaUsu",gxold:"O8809OrdemServicoOcorrenciaUsu",gxvar:"A8809OrdemServicoOcorrenciaUsu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8809OrdemServicoOcorrenciaUsu=Value},v2z:function(Value){gx.O.Z8809OrdemServicoOcorrenciaUsu=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAUSU",row || gx.fn.currentGridRowImpl(34),gx.O.A8809OrdemServicoOcorrenciaUsu,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8809OrdemServicoOcorrenciaUsu=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOOCORRENCIAUSU",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV36BmpAlt",gxold:"OV36BmpAlt",gxvar:"AV36BmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36BmpAlt=Value},v2z:function(Value){gx.O.ZV36BmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(34),gx.O.AV36BmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV36BmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(34))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(34))}, gxvar_GXI:'AV45Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAAPAEMPID",gxz:"Z9108OrdemServicoOcorrenciaApaEmpId",gxold:"O9108OrdemServicoOcorrenciaApaEmpId",gxvar:"A9108OrdemServicoOcorrenciaApaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9108OrdemServicoOcorrenciaApaEmpId=Value},v2z:function(Value){gx.O.Z9108OrdemServicoOcorrenciaApaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAAPAEMPID",row || gx.fn.currentGridRowImpl(34),gx.O.A9108OrdemServicoOcorrenciaApaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9108OrdemServicoOcorrenciaApaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOOCORRENCIAAPAEMPID",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAFASEEPID",gxz:"Z9105OrdemServicoOcorrenciaFaseEpId",gxold:"O9105OrdemServicoOcorrenciaFaseEpId",gxvar:"A9105OrdemServicoOcorrenciaFaseEpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9105OrdemServicoOcorrenciaFaseEpId=Value},v2z:function(Value){gx.O.Z9105OrdemServicoOcorrenciaFaseEpId=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAFASEEPID",row || gx.fn.currentGridRowImpl(34),gx.O.A9105OrdemServicoOcorrenciaFaseEpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9105OrdemServicoOcorrenciaFaseEpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOOCORRENCIAFASEEPID",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOSEMPID",gxz:"Z9106OrdemServicoOcorrenciaOSEmpId",gxold:"O9106OrdemServicoOcorrenciaOSEmpId",gxvar:"A9106OrdemServicoOcorrenciaOSEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9106OrdemServicoOcorrenciaOSEmpId=Value},v2z:function(Value){gx.O.Z9106OrdemServicoOcorrenciaOSEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAOSEMPID",row || gx.fn.currentGridRowImpl(34),gx.O.A9106OrdemServicoOcorrenciaOSEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9106OrdemServicoOcorrenciaOSEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOOCORRENCIAOSEMPID",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOOCORRENCIAOSID",gxz:"Z9107OrdemServicoOcorrenciaOSId",gxold:"O9107OrdemServicoOcorrenciaOSId",gxvar:"A9107OrdemServicoOcorrenciaOSId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9107OrdemServicoOcorrenciaOSId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9107OrdemServicoOcorrenciaOSId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOOCORRENCIAOSID",row || gx.fn.currentGridRowImpl(34),gx.O.A9107OrdemServicoOcorrenciaOSId,0)},c2v:function(){gx.O.A9107OrdemServicoOcorrenciaOSId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOOCORRENCIAOSID",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OSOCORRENCIAPROFISSIONALEMPID",gxz:"Z8811OSOcorrenciaProfissionalEmpId",gxold:"O8811OSOcorrenciaProfissionalEmpId",gxvar:"A8811OSOcorrenciaProfissionalEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8811OSOcorrenciaProfissionalEmpId=Value},v2z:function(Value){gx.O.Z8811OSOcorrenciaProfissionalEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("OSOCORRENCIAPROFISSIONALEMPID",row || gx.fn.currentGridRowImpl(34),gx.O.A8811OSOcorrenciaProfissionalEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8811OSOcorrenciaProfissionalEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("OSOCORRENCIAPROFISSIONALEMPID",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[53]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[58]={fld:"PROMPT_APARELHOID",grid:0};
   this.AV23OrdemServicoId = 0 ;
   this.ZV23OrdemServicoId = 0 ;
   this.OV23OrdemServicoId = 0 ;
   this.AV15AparelhoEmpresaId = "" ;
   this.ZV15AparelhoEmpresaId = "" ;
   this.OV15AparelhoEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV21AparelhoId = 0 ;
   this.ZV21AparelhoId = 0 ;
   this.OV21AparelhoId = 0 ;
   this.AV22AparelhoDescricao = "" ;
   this.ZV22AparelhoDescricao = "" ;
   this.OV22AparelhoDescricao = "" ;
   this.AV24OrdemServicoApareSeq = 0 ;
   this.ZV24OrdemServicoApareSeq = 0 ;
   this.OV24OrdemServicoApareSeq = 0 ;
   this.Z8814OrdemServicoOcorrenciaSeq = 0 ;
   this.O8814OrdemServicoOcorrenciaSeq = 0 ;
   this.Z9110OrdemServicoOcorrenciaApaSeq = 0 ;
   this.O9110OrdemServicoOcorrenciaApaSeq = 0 ;
   this.Z9109OrdemServicoOcorrenciaApaId = 0 ;
   this.O9109OrdemServicoOcorrenciaApaId = 0 ;
   this.ZV29GridAparelhoDes = "" ;
   this.OV29GridAparelhoDes = "" ;
   this.Z8813OrdemServicoOcorrenciaFase = 0 ;
   this.O8813OrdemServicoOcorrenciaFase = 0 ;
   this.ZV30GridFaseDescricao = "" ;
   this.OV30GridFaseDescricao = "" ;
   this.Z8812OSOcorrenciaProfissionalId = 0 ;
   this.O8812OSOcorrenciaProfissionalId = 0 ;
   this.ZV31GridProfissinalNome = "" ;
   this.OV31GridProfissinalNome = "" ;
   this.Z8810OrdemServicoOcorrenciaObs = "" ;
   this.O8810OrdemServicoOcorrenciaObs = "" ;
   this.ZV37GridOrdemServicoOcorrenciaObs = "" ;
   this.OV37GridOrdemServicoOcorrenciaObs = "" ;
   this.Z8808OrdemServicoOcorrenciaDtHr = gx.date.nullDate() ;
   this.O8808OrdemServicoOcorrenciaDtHr = gx.date.nullDate() ;
   this.Z8809OrdemServicoOcorrenciaUsu = "" ;
   this.O8809OrdemServicoOcorrenciaUsu = "" ;
   this.ZV36BmpAlt = "" ;
   this.OV36BmpAlt = "" ;
   this.Z9108OrdemServicoOcorrenciaApaEmpId = "" ;
   this.O9108OrdemServicoOcorrenciaApaEmpId = "" ;
   this.Z9105OrdemServicoOcorrenciaFaseEpId = "" ;
   this.O9105OrdemServicoOcorrenciaFaseEpId = "" ;
   this.Z9106OrdemServicoOcorrenciaOSEmpId = "" ;
   this.O9106OrdemServicoOcorrenciaOSEmpId = "" ;
   this.Z9107OrdemServicoOcorrenciaOSId = 0 ;
   this.O9107OrdemServicoOcorrenciaOSId = 0 ;
   this.Z8811OSOcorrenciaProfissionalEmpId = "" ;
   this.O8811OSOcorrenciaProfissionalEmpId = "" ;
   this.AV23OrdemServicoId = 0 ;
   this.AV15AparelhoEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21AparelhoId = 0 ;
   this.AV22AparelhoDescricao = "" ;
   this.AV24OrdemServicoApareSeq = 0 ;
   this.AV26ParOrdemServicoApareSeq = 0 ;
   this.AV27ParAparelhoId = 0 ;
   this.AV28ParAparelhoDescricao = "" ;
   this.AV38OrdemServicoSituacao = "" ;
   this.AV42OrdemServicoApareSNEntregue = "" ;
   this.A8814OrdemServicoOcorrenciaSeq = 0 ;
   this.A9110OrdemServicoOcorrenciaApaSeq = 0 ;
   this.A9109OrdemServicoOcorrenciaApaId = 0 ;
   this.AV29GridAparelhoDes = "" ;
   this.A8813OrdemServicoOcorrenciaFase = 0 ;
   this.AV30GridFaseDescricao = "" ;
   this.A8812OSOcorrenciaProfissionalId = 0 ;
   this.AV31GridProfissinalNome = "" ;
   this.A8810OrdemServicoOcorrenciaObs = "" ;
   this.AV37GridOrdemServicoOcorrenciaObs = "" ;
   this.A8808OrdemServicoOcorrenciaDtHr = gx.date.nullDate() ;
   this.A8809OrdemServicoOcorrenciaUsu = "" ;
   this.AV36BmpAlt = "" ;
   this.A9108OrdemServicoOcorrenciaApaEmpId = "" ;
   this.A9105OrdemServicoOcorrenciaFaseEpId = "" ;
   this.A9106OrdemServicoOcorrenciaOSEmpId = "" ;
   this.A9107OrdemServicoOcorrenciaOSId = 0 ;
   this.A8811OSOcorrenciaProfissionalEmpId = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8602OrdemServicoFaseCorLetra = 0 ;
   this.A8825AparelhoId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8821AparelhoDescricao = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8608ProfissionalNome = "" ;
   this.AV13DESEQUIPAMENTO = "" ;
   this.AV33GridAparelhoEmpId = "" ;
   this.AV32GridAparelhoId = 0 ;
   this.AV35GridFaseEmpId = "" ;
   this.AV34GridFaseId = 0 ;
   this.AV41OSOcorrenciaProfissionalEmpId = "" ;
   this.AV40OSOcorrenciaProfissionalId = 0 ;
   this.AV39GridTipoFaseCor = 0 ;
   this.AV51Classecor = "" ;
   this.Events = {"e111d72_client": ["'FECHAR'", true] ,"e141d72_client": ["'ALTERAR'", true] ,"e151d71_client": ["ENTER", true] ,"e161d72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21AparelhoId',fld:'vAPARELHOID'},{av:'AV24OrdemServicoApareSeq',fld:'vORDEMSERVICOAPARESEQ'},{av:'AV23OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV36BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV13DESEQUIPAMENTO',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A9109OrdemServicoOcorrenciaApaId',fld:'ORDEMSERVICOOCORRENCIAAPAID'},{av:'A9108OrdemServicoOcorrenciaApaEmpId',fld:'ORDEMSERVICOOCORRENCIAAPAEMPID'},{av:'A8813OrdemServicoOcorrenciaFase',fld:'ORDEMSERVICOOCORRENCIAFASE'},{av:'A9105OrdemServicoOcorrenciaFaseEpId',fld:'ORDEMSERVICOOCORRENCIAFASEEPID'},{av:'A8812OSOcorrenciaProfissionalId',fld:'OSOCORRENCIAPROFISSIONALID'},{av:'A8811OSOcorrenciaProfissionalEmpId',fld:'OSOCORRENCIAPROFISSIONALEMPID'},{av:'A8810OrdemServicoOcorrenciaObs',fld:'ORDEMSERVICOOCORRENCIAOBS'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV33GridAparelhoEmpId',fld:'vGRIDAPARELHOEMPID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'AV32GridAparelhoId',fld:'vGRIDAPARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV35GridFaseEmpId',fld:'vGRIDFASEEMPID'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV34GridFaseId',fld:'vGRIDFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV41OSOcorrenciaProfissionalEmpId',fld:'vOSOCORRENCIAPROFISSIONALEMPID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV40OSOcorrenciaProfissionalId',fld:'vOSOCORRENCIAPROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV39GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV51Classecor',fld:'vCLASSECOR'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV13DESEQUIPAMENTO',fld:'vDESEQUIPAMENTO',hsh:true},{av:'A9109OrdemServicoOcorrenciaApaId',fld:'ORDEMSERVICOOCORRENCIAAPAID'},{av:'A9108OrdemServicoOcorrenciaApaEmpId',fld:'ORDEMSERVICOOCORRENCIAAPAEMPID'},{av:'A8813OrdemServicoOcorrenciaFase',fld:'ORDEMSERVICOOCORRENCIAFASE'},{av:'A9105OrdemServicoOcorrenciaFaseEpId',fld:'ORDEMSERVICOOCORRENCIAFASEEPID'},{av:'A8812OSOcorrenciaProfissionalId',fld:'OSOCORRENCIAPROFISSIONALID'},{av:'A8811OSOcorrenciaProfissionalEmpId',fld:'OSOCORRENCIAPROFISSIONALEMPID'},{av:'A8810OrdemServicoOcorrenciaObs',fld:'ORDEMSERVICOOCORRENCIAOBS'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV33GridAparelhoEmpId',fld:'vGRIDAPARELHOEMPID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'AV32GridAparelhoId',fld:'vGRIDAPARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV35GridFaseEmpId',fld:'vGRIDFASEEMPID'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV34GridFaseId',fld:'vGRIDFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV41OSOcorrenciaProfissionalEmpId',fld:'vOSOCORRENCIAPROFISSIONALEMPID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV40OSOcorrenciaProfissionalId',fld:'vOSOCORRENCIAPROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV39GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV51Classecor',fld:'vCLASSECOR'}],[{av:'gx.fn.getCtrlProperty("vGRIDAPARELHODES","Title")',ctrl:'vGRIDAPARELHODES',prop:'Title'},{av:'AV32GridAparelhoId',fld:'vGRIDAPARELHOID'},{av:'AV33GridAparelhoEmpId',fld:'vGRIDAPARELHOEMPID'},{av:'AV34GridFaseId',fld:'vGRIDFASEID'},{av:'AV35GridFaseEmpId',fld:'vGRIDFASEEMPID'},{av:'AV40OSOcorrenciaProfissionalId',fld:'vOSOCORRENCIAPROFISSIONALID'},{av:'AV41OSOcorrenciaProfissionalEmpId',fld:'vOSOCORRENCIAPROFISSIONALEMPID'},{av:'AV37GridOrdemServicoOcorrenciaObs',fld:'vGRIDORDEMSERVICOOCORRENCIAOBS'},{av:'AV29GridAparelhoDes',fld:'vGRIDAPARELHODES'},{av:'AV39GridTipoFaseCor',fld:'vGRIDTIPOFASECOR'},{av:'AV30GridFaseDescricao',fld:'vGRIDFASEDESCRICAO'},{av:'AV31GridProfissinalNome',fld:'vGRIDPROFISSINALNOME'},{av:'AV51Classecor',fld:'vCLASSECOR'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOOCORRENCIASEQ","Class")',ctrl:'ORDEMSERVICOOCORRENCIASEQ',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDAPARELHODES","Class")',ctrl:'vGRIDAPARELHODES',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDFASEDESCRICAO","Class")',ctrl:'vGRIDFASEDESCRICAO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDPROFISSINALNOME","Class")',ctrl:'vGRIDPROFISSINALNOME',prop:'Class'},{av:'gx.fn.getCtrlProperty("vGRIDORDEMSERVICOOCORRENCIAOBS","Class")',ctrl:'vGRIDORDEMSERVICOOCORRENCIAOBS',prop:'Class'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOOCORRENCIADTHR","Class")',ctrl:'ORDEMSERVICOOCORRENCIADTHR',prop:'Class'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOOCORRENCIAUSU","Class")',ctrl:'ORDEMSERVICOOCORRENCIAUSU',prop:'Class'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV37GridOrdemServicoOcorrenciaObs',fld:'vGRIDORDEMSERVICOOCORRENCIAOBS'},{av:'AV29GridAparelhoDes',fld:'vGRIDAPARELHODES'},{av:'AV30GridFaseDescricao',fld:'vGRIDFASEDESCRICAO'},{av:'AV31GridProfissinalNome',fld:'vGRIDPROFISSINALNOME'},{av:'A8808OrdemServicoOcorrenciaDtHr',fld:'ORDEMSERVICOOCORRENCIADTHR'},{av:'A9106OrdemServicoOcorrenciaOSEmpId',fld:'ORDEMSERVICOOCORRENCIAOSEMPID'},{av:'A9107OrdemServicoOcorrenciaOSId',fld:'ORDEMSERVICOOCORRENCIAOSID'},{av:'A9108OrdemServicoOcorrenciaApaEmpId',fld:'ORDEMSERVICOOCORRENCIAAPAEMPID'},{av:'A9109OrdemServicoOcorrenciaApaId',fld:'ORDEMSERVICOOCORRENCIAAPAID'},{av:'A9110OrdemServicoOcorrenciaApaSeq',fld:'ORDEMSERVICOOCORRENCIAAPASEQ'},{av:'A8814OrdemServicoOcorrenciaSeq',fld:'ORDEMSERVICOOCORRENCIASEQ'},{av:'AV38OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO',hsh:true},{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE',hsh:true}],[{av:'AV42OrdemServicoApareSNEntregue',fld:'vORDEMSERVICOAPARESNENTREGUE',hsh:true},{av:'AV38OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO',hsh:true},{av:'A8814OrdemServicoOcorrenciaSeq',fld:'ORDEMSERVICOOCORRENCIASEQ'},{av:'A9110OrdemServicoOcorrenciaApaSeq',fld:'ORDEMSERVICOOCORRENCIAAPASEQ'},{av:'A9109OrdemServicoOcorrenciaApaId',fld:'ORDEMSERVICOOCORRENCIAAPAID'},{av:'A9108OrdemServicoOcorrenciaApaEmpId',fld:'ORDEMSERVICOOCORRENCIAAPAEMPID'},{av:'A9107OrdemServicoOcorrenciaOSId',fld:'ORDEMSERVICOOCORRENCIAOSID'},{av:'A9106OrdemServicoOcorrenciaOSEmpId',fld:'ORDEMSERVICOOCORRENCIAOSEMPID'},{av:'A8808OrdemServicoOcorrenciaDtHr',fld:'ORDEMSERVICOOCORRENCIADTHR'},{av:'AV31GridProfissinalNome',fld:'vGRIDPROFISSINALNOME'},{av:'AV30GridFaseDescricao',fld:'vGRIDFASEDESCRICAO'},{av:'AV29GridAparelhoDes',fld:'vGRIDAPARELHODES'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13DESEQUIPAMENTO", "vDESEQUIPAMENTO", 0, "svchar");
   this.setVCMap("A8824AparelhoEmpresaId", "APARELHOEMPRESAID", 0, "char");
   this.setVCMap("AV33GridAparelhoEmpId", "vGRIDAPARELHOEMPID", 0, "char");
   this.setVCMap("A8825AparelhoId", "APARELHOID", 0, "int");
   this.setVCMap("AV32GridAparelhoId", "vGRIDAPARELHOID", 0, "int");
   this.setVCMap("A8821AparelhoDescricao", "APARELHODESCRICAO", 0, "svchar");
   this.setVCMap("A8606OrdemServicoFaseEmpresaId", "ORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV35GridFaseEmpId", "vGRIDFASEEMPID", 0, "char");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("AV34GridFaseId", "vGRIDFASEID", 0, "int");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   this.setVCMap("A8602OrdemServicoFaseCorLetra", "ORDEMSERVICOFASECORLETRA", 0, "int");
   this.setVCMap("A8567ProfissionalEmpresaId", "PROFISSIONALEMPRESAID", 0, "char");
   this.setVCMap("AV41OSOcorrenciaProfissionalEmpId", "vOSOCORRENCIAPROFISSIONALEMPID", 0, "char");
   this.setVCMap("A8566ProfissionalId", "PROFISSIONALID", 0, "int");
   this.setVCMap("AV40OSOcorrenciaProfissionalId", "vOSOCORRENCIAPROFISSIONALID", 0, "int");
   this.setVCMap("A8608ProfissionalNome", "PROFISSIONALNOME", 0, "svchar");
   this.setVCMap("AV39GridTipoFaseCor", "vGRIDTIPOFASECOR", 0, "int");
   this.setVCMap("AV51Classecor", "vCLASSECOR", 0, "char");
   this.setVCMap("AV26ParOrdemServicoApareSeq", "vPARORDEMSERVICOAPARESEQ", 0, "int");
   this.setVCMap("AV27ParAparelhoId", "vPARAPARELHOID", 0, "int");
   this.setVCMap("AV28ParAparelhoDescricao", "vPARAPARELHODESCRICAO", 0, "svchar");
   this.setVCMap("AV38OrdemServicoSituacao", "vORDEMSERVICOSITUACAO", 0, "char");
   this.setVCMap("AV42OrdemServicoApareSNEntregue", "vORDEMSERVICOAPARESNENTREGUE", 0, "char");
   this.setVCMap("AV13DESEQUIPAMENTO", "vDESEQUIPAMENTO", 0, "svchar");
   this.setVCMap("A8824AparelhoEmpresaId", "APARELHOEMPRESAID", 0, "char");
   this.setVCMap("AV33GridAparelhoEmpId", "vGRIDAPARELHOEMPID", 0, "char");
   this.setVCMap("A8825AparelhoId", "APARELHOID", 0, "int");
   this.setVCMap("AV32GridAparelhoId", "vGRIDAPARELHOID", 0, "int");
   this.setVCMap("A8821AparelhoDescricao", "APARELHODESCRICAO", 0, "svchar");
   this.setVCMap("A8606OrdemServicoFaseEmpresaId", "ORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV35GridFaseEmpId", "vGRIDFASEEMPID", 0, "char");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("AV34GridFaseId", "vGRIDFASEID", 0, "int");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   this.setVCMap("A8602OrdemServicoFaseCorLetra", "ORDEMSERVICOFASECORLETRA", 0, "int");
   this.setVCMap("A8567ProfissionalEmpresaId", "PROFISSIONALEMPRESAID", 0, "char");
   this.setVCMap("AV41OSOcorrenciaProfissionalEmpId", "vOSOCORRENCIAPROFISSIONALEMPID", 0, "char");
   this.setVCMap("A8566ProfissionalId", "PROFISSIONALID", 0, "int");
   this.setVCMap("AV40OSOcorrenciaProfissionalId", "vOSOCORRENCIAPROFISSIONALID", 0, "int");
   this.setVCMap("A8608ProfissionalNome", "PROFISSIONALNOME", 0, "svchar");
   this.setVCMap("AV39GridTipoFaseCor", "vGRIDTIPOFASECOR", 0, "int");
   this.setVCMap("AV51Classecor", "vCLASSECOR", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV36BmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV36BmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV13DESEQUIPAMENTO"});
   GridContainer.addRefreshingVar({rfrVar:"A9109OrdemServicoOcorrenciaApaId", rfrProp:"Value", gxAttId:"9109"});
   GridContainer.addRefreshingVar({rfrVar:"A9108OrdemServicoOcorrenciaApaEmpId", rfrProp:"Value", gxAttId:"9108"});
   GridContainer.addRefreshingVar({rfrVar:"A8813OrdemServicoOcorrenciaFase", rfrProp:"Value", gxAttId:"8813"});
   GridContainer.addRefreshingVar({rfrVar:"A9105OrdemServicoOcorrenciaFaseEpId", rfrProp:"Value", gxAttId:"9105"});
   GridContainer.addRefreshingVar({rfrVar:"A8812OSOcorrenciaProfissionalId", rfrProp:"Value", gxAttId:"8812"});
   GridContainer.addRefreshingVar({rfrVar:"A8811OSOcorrenciaProfissionalEmpId", rfrProp:"Value", gxAttId:"8811"});
   GridContainer.addRefreshingVar({rfrVar:"A8810OrdemServicoOcorrenciaObs", rfrProp:"Value", gxAttId:"8810"});
   GridContainer.addRefreshingVar({rfrVar:"A8824AparelhoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV33GridAparelhoEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A8825AparelhoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV32GridAparelhoId"});
   GridContainer.addRefreshingVar({rfrVar:"A8821AparelhoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A8606OrdemServicoFaseEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV35GridFaseEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A8607OrdemServicoFaseId"});
   GridContainer.addRefreshingVar({rfrVar:"AV34GridFaseId"});
   GridContainer.addRefreshingVar({rfrVar:"A8600OrdemServicoFaseDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A8602OrdemServicoFaseCorLetra"});
   GridContainer.addRefreshingVar({rfrVar:"A8567ProfissionalEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV41OSOcorrenciaProfissionalEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A8566ProfissionalId"});
   GridContainer.addRefreshingVar({rfrVar:"AV40OSOcorrenciaProfissionalId"});
   GridContainer.addRefreshingVar({rfrVar:"A8608ProfissionalNome"});
   GridContainer.addRefreshingVar({rfrVar:"AV39GridTipoFaseCor"});
   GridContainer.addRefreshingVar({rfrVar:"AV51Classecor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaordemservicoocorrencia());
