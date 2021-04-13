/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:40:6.21
*/
gx.evt.autoSkip = false;
gx.define('hemitecarteirinha', false, function () {
   this.ServerClass =  "hemitecarteirinha" ;
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
      this.AV99Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV94SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.Validv_Titularpessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Dependenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPENDENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11hp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12hp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13hp2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e14hp2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e15hp2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19hp2_client=function()
   {
      this.executeServerEvent("VTITULARPESSOAID.ISVALID", true, arguments[0], false, false);
   };
   this.e20hp2_client=function()
   {
      this.executeServerEvent("VDEPENDENTEID.ISVALID", true, arguments[0], false, false);
   };
   this.e21hp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,31,33,35,40,43,46,48,50,51,52,53,54,55,56,57,58,65,68,69,71];
   this.GXLastCtrlId =71;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",49,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hemitecarteirinha",[],false,1,true,true,0,true,false,false,"",690,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Titularpessoaid",50,"vTITULARPESSOAID","Titular","","TitularPessoaId","int",52,"px",6,6,"right",null,[],"Titularpessoaid","TitularPessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprompt1","vBMPPROMPT1",51,0,"px",17,"px",null,"","","GridColumnImage","");
   Grid1Container.addSingleLineEdit("Titularpessoanome",52,"vTITULARPESSOANOME","Nome","","TitularPessoaNome","svchar",210,"px",40,40,"left",null,[],"Titularpessoanome","TitularPessoaNome",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Dependenteid",53,"vDEPENDENTEID","Dependente","","DependenteId","int",68,"px",2,2,"right",null,[],"Dependenteid","DependenteId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprompt2","vBMPPROMPT2",54,0,"px",17,"px",null,"","","GridColumnImage","");
   Grid1Container.addSingleLineEdit("Dependentenome",55,"vDEPENDENTENOME","Nome","","DependenteNome","svchar",260,"px",50,50,"left",null,[],"Dependentenome","DependenteNome",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV77TxtTela",gxold:"OV77TxtTela",gxvar:"AV77TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV77TxtTela=Value},v2z:function(Value){gx.O.ZV77TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV77TxtTela)},c2v:function(){gx.O.AV77TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV14Ordenacao",gxold:"OV14Ordenacao",gxvar:"AV14Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Ordenacao=Value},v2z:function(Value){gx.O.ZV14Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV14Ordenacao)},c2v:function(){gx.O.AV14Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOREL",gxz:"ZV66OpcaoRel",gxold:"OV66OpcaoRel",gxvar:"AV66OpcaoRel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV66OpcaoRel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66OpcaoRel=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vOPCAOREL",gx.O.AV66OpcaoRel)},c2v:function(){gx.O.AV66OpcaoRel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOPCAOREL",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[48]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[50]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:49,gxgrid:this.Grid1Container,fnc:this.Validv_Titularpessoaid,isvalid:'e19hp2_client',rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV59TitularPessoaId",gxold:"OV59TitularPessoaId",gxvar:"AV59TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV59TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59TitularPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTITULARPESSOAID",row || gx.fn.currentGridRowImpl(49),gx.O.AV59TitularPessoaId,0)},c2v:function(){gx.O.AV59TitularPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTITULARPESSOAID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPT1",gxz:"ZV64bmpPrompt1",gxold:"OV64bmpPrompt1",gxvar:"AV64bmpPrompt1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV64bmpPrompt1=Value},v2z:function(Value){gx.O.ZV64bmpPrompt1=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPT1",row || gx.fn.currentGridRowImpl(49),gx.O.AV64bmpPrompt1,gx.O.AV101Bmpprompt1_GXI)},c2v:function(){gx.O.AV101Bmpprompt1_GXI=this.val_GXI();gx.O.AV64bmpPrompt1=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPT1",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPT1_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV101Bmpprompt1_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV60TitularPessoaNome",gxold:"OV60TitularPessoaNome",gxvar:"AV60TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV60TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV60TitularPessoaNome=Value},v2c:function(row){gx.fn.setGridControlValue("vTITULARPESSOANOME",row || gx.fn.currentGridRowImpl(49),gx.O.AV60TitularPessoaNome,0)},c2v:function(){gx.O.AV60TitularPessoaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vTITULARPESSOANOME",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:0,isacc:0,grid:49,gxgrid:this.Grid1Container,fnc:this.Validv_Dependenteid,isvalid:'e20hp2_client',rgrid:[],fld:"vDEPENDENTEID",gxz:"ZV20DependenteId",gxold:"OV20DependenteId",gxvar:"AV20DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20DependenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vDEPENDENTEID",row || gx.fn.currentGridRowImpl(49),gx.O.AV20DependenteId,0)},c2v:function(){gx.O.AV20DependenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vDEPENDENTEID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPT2",gxz:"ZV65bmpPrompt2",gxold:"OV65bmpPrompt2",gxvar:"AV65bmpPrompt2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV65bmpPrompt2=Value},v2z:function(Value){gx.O.ZV65bmpPrompt2=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPT2",row || gx.fn.currentGridRowImpl(49),gx.O.AV65bmpPrompt2,gx.O.AV102Bmpprompt2_GXI)},c2v:function(){gx.O.AV102Bmpprompt2_GXI=this.val_GXI();gx.O.AV65bmpPrompt2=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPT2",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPT2_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV102Bmpprompt2_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV33DependenteNome",gxold:"OV33DependenteNome",gxvar:"AV33DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33DependenteNome=Value},v2z:function(Value){gx.O.ZV33DependenteNome=Value},v2c:function(row){gx.fn.setGridControlValue("vDEPENDENTENOME",row || gx.fn.currentGridRowImpl(49),gx.O.AV33DependenteNome,0)},c2v:function(){gx.O.AV33DependenteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vDEPENDENTENOME",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[57]={fld:"",grid:0};
   GXValidFnc[58]={fld:"",grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV29EmpresaPessoasEmpresaId",gxold:"OV29EmpresaPessoasEmpresaId",gxvar:"AV29EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV29EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV29EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV29EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV24Sim",gxold:"OV24Sim",gxvar:"AV24Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Sim=Value},v2z:function(Value){gx.O.ZV24Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV24Sim,0)},c2v:function(){gx.O.AV24Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV25Nao",gxold:"OV25Nao",gxvar:"AV25Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Nao=Value},v2z:function(Value){gx.O.ZV25Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV25Nao,0)},c2v:function(){gx.O.AV25Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"BTNHELP",grid:0};
   this.AV77TxtTela = "" ;
   this.ZV77TxtTela = "" ;
   this.OV77TxtTela = "" ;
   this.AV14Ordenacao = "" ;
   this.ZV14Ordenacao = "" ;
   this.OV14Ordenacao = "" ;
   this.AV66OpcaoRel = 0 ;
   this.ZV66OpcaoRel = 0 ;
   this.OV66OpcaoRel = 0 ;
   this.ZV59TitularPessoaId = 0 ;
   this.OV59TitularPessoaId = 0 ;
   this.ZV64bmpPrompt1 = "" ;
   this.OV64bmpPrompt1 = "" ;
   this.ZV60TitularPessoaNome = "" ;
   this.OV60TitularPessoaNome = "" ;
   this.ZV20DependenteId = 0 ;
   this.OV20DependenteId = 0 ;
   this.ZV65bmpPrompt2 = "" ;
   this.OV65bmpPrompt2 = "" ;
   this.ZV33DependenteNome = "" ;
   this.OV33DependenteNome = "" ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.ZV29EmpresaPessoasEmpresaId = "" ;
   this.OV29EmpresaPessoasEmpresaId = "" ;
   this.AV24Sim = "" ;
   this.ZV24Sim = "" ;
   this.OV24Sim = "" ;
   this.AV25Nao = "" ;
   this.ZV25Nao = "" ;
   this.OV25Nao = "" ;
   this.AV77TxtTela = "" ;
   this.AV14Ordenacao = "" ;
   this.AV66OpcaoRel = 0 ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.AV24Sim = "" ;
   this.AV25Nao = "" ;
   this.AV59TitularPessoaId = 0 ;
   this.AV64bmpPrompt1 = "" ;
   this.AV60TitularPessoaNome = "" ;
   this.AV20DependenteId = 0 ;
   this.AV65bmpPrompt2 = "" ;
   this.AV33DependenteNome = "" ;
   this.A2653DependenteId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2640DependenteNome = "" ;
   this.AV99Pgmname = "" ;
   this.AV94SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.Events = {"e11hp2_client": ["'FECHAR'", true] ,"e12hp2_client": ["ENTER", true] ,"e13hp2_client": ["'SALVARTXT'", true] ,"e14hp2_client": ["VTXTTELA.CLICK", true] ,"e15hp2_client": ["'EXCLUIRTXT'", true] ,"e19hp2_client": ["VTITULARPESSOAID.ISVALID", true] ,"e20hp2_client": ["VDEPENDENTEID.ISVALID", true] ,"e21hp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpPrompt1',fld:'vBMPPROMPT1',grid:49},{av:'AV65bmpPrompt2',fld:'vBMPPROMPT2',grid:49},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV94SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV20DependenteId',fld:'vDEPENDENTEID',grid:49},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID',grid:49},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME',grid:49},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME',grid:49},{av:'AV77TxtTela',fld:'vTXTTELA'}],[{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV109GXV3',fld:'vGXV3'},{av:'AV95SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV63contador',fld:'vCONTADOR'},{av:'AV37SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV108GXV2',fld:'vGXV2'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'},{av:'AV20DependenteId',fld:'vDEPENDENTEID',grid:49},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID',grid:49},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV36RetornoCart',fld:'vRETORNOCART'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV100Pgmdesc',fld:'vPGMDESC'},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME',grid:49},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME',grid:49}],[{av:'AV34tpErro',fld:'vTPERRO'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV104GXLvl103',fld:'vGXLVL103'},{av:'AV105GXLvl112',fld:'vGXLVL112'},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV89SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV35ModeloCart',fld:'vMODELOCART'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'},{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV63contador',fld:'vCONTADOR'},{av:'AV37SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV91OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV20DependenteId',fld:'vDEPENDENTEID'},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV54x',fld:'vX'},{av:'AV106GXV1',fld:'vGXV1'},{av:'AV37SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV20DependenteId',fld:'vDEPENDENTEID'},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV65bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV94SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV20DependenteId',fld:'vDEPENDENTEID'},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'}],[{av:'AV91OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV94SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV108GXV2',fld:'vGXV2'},{av:'AV95SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV77TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["VTITULARPESSOAID.ISVALID"] = [[{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID'}],[{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME'}]];
   this.EvtParms["VDEPENDENTEID.ISVALID"] = [[{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV20DependenteId',fld:'vDEPENDENTEID'}],[{av:'AV33DependenteNome',fld:'vDEPENDENTENOME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpPrompt1',fld:'vBMPPROMPT1',grid:49},{av:'AV65bmpPrompt2',fld:'vBMPPROMPT2',grid:49},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV94SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV20DependenteId',fld:'vDEPENDENTEID',grid:49},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID',grid:49},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME',grid:49},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME',grid:49},{av:'AV77TxtTela',fld:'vTXTTELA'}],[{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV109GXV3',fld:'vGXV3'},{av:'AV95SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV63contador',fld:'vCONTADOR'},{av:'AV37SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV108GXV2',fld:'vGXV2'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpPrompt1',fld:'vBMPPROMPT1',grid:49},{av:'AV65bmpPrompt2',fld:'vBMPPROMPT2',grid:49},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV94SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV20DependenteId',fld:'vDEPENDENTEID',grid:49},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID',grid:49},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME',grid:49},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME',grid:49},{av:'AV77TxtTela',fld:'vTXTTELA'}],[{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV109GXV3',fld:'vGXV3'},{av:'AV95SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV63contador',fld:'vCONTADOR'},{av:'AV37SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV108GXV2',fld:'vGXV2'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpPrompt1',fld:'vBMPPROMPT1',grid:49},{av:'AV65bmpPrompt2',fld:'vBMPPROMPT2',grid:49},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV94SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV20DependenteId',fld:'vDEPENDENTEID',grid:49},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID',grid:49},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME',grid:49},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME',grid:49},{av:'AV77TxtTela',fld:'vTXTTELA'}],[{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV109GXV3',fld:'vGXV3'},{av:'AV95SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV63contador',fld:'vCONTADOR'},{av:'AV37SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV108GXV2',fld:'vGXV2'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpPrompt1',fld:'vBMPPROMPT1',grid:49},{av:'AV65bmpPrompt2',fld:'vBMPPROMPT2',grid:49},{av:'AV99Pgmname',fld:'vPGMNAME'},{av:'AV94SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV20DependenteId',fld:'vDEPENDENTEID',grid:49},{av:'AV59TitularPessoaId',fld:'vTITULARPESSOAID',grid:49},{av:'AV60TitularPessoaNome',fld:'vTITULARPESSOANOME',grid:49},{av:'AV33DependenteNome',fld:'vDEPENDENTENOME',grid:49},{av:'AV77TxtTela',fld:'vTXTTELA'}],[{av:'AV77TxtTela',fld:'vTXTTELA'},{av:'AV109GXV3',fld:'vGXV3'},{av:'AV95SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV38SdtGrid',fld:'vSDTGRID'},{av:'AV63contador',fld:'vCONTADOR'},{av:'AV37SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV108GXV2',fld:'vGXV2'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV66OpcaoRel',fld:'vOPCAOREL'}]];
   this.setPrompt("&BMPPROMPT1", [50]);
   this.setPrompt("&BMPPROMPT2", [53]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV99Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV94SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV99Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV94SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV64bmpPrompt1", rfrProp:"Value", gxAttId:"Bmpprompt1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV65bmpPrompt2", rfrProp:"Value", gxAttId:"Bmpprompt2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV99Pgmname"});
   Grid1Container.addRefreshingVar({rfrVar:"AV94SdtTxtTela"});
   Grid1Container.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV20DependenteId", rfrProp:"Value", gxAttId:"Dependenteid"});
   Grid1Container.addRefreshingVar({rfrVar:"AV59TitularPessoaId", rfrProp:"Value", gxAttId:"Titularpessoaid"});
   Grid1Container.addRefreshingVar({rfrVar:"AV60TitularPessoaNome", rfrProp:"Value", gxAttId:"Titularpessoanome"});
   Grid1Container.addRefreshingVar({rfrVar:"AV33DependenteNome", rfrProp:"Value", gxAttId:"Dependentenome"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemitecarteirinha());
