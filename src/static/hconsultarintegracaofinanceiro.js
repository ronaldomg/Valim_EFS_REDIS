/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:44:8.91
*/
gx.evt.autoSkip = false;
gx.define('hconsultarintegracaofinanceiro', false, function () {
   this.ServerClass =  "hconsultarintegracaofinanceiro" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV17ItensLancamentoContabilDebCre=gx.fn.getControlValue("vITENSLANCAMENTOCONTABILDEBCRE") ;
   };
   this.Validv_Lancamentocontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOCONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Itenslancamentocontabilsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vITENSLANCAMENTOCONTABILSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13j82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11j82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15j82_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,27,29,31,34,36,37,38,39,40];
   this.GXLastCtrlId =40;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",35,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultarintegracaofinanceiro",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(1686,36,"CONTAPAGRECNUMERO","Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1803,37,"CONTALANCAMSEQUENCIA","Lancmto Conta","","ContaLancamSequencia","int",0,"px",3,3,"right",null,[],1803,"ContaLancamSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1929,38,"LANCAMENTOCXABCONUMERO","Lancmto Caixa/Banco","","LancamentoCxaBcoNumero","int",0,"px",8,8,"right",null,[],1929,"LancamentoCxaBcoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2744,39,"ITENSLANCAMENTOCONTABILFINANCS","Sequencia","","ItensLancamentoContabilFinancS","int",0,"px",4,4,"right",null,[],2744,"ItensLancamentoContabilFinancS",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Lancamentocontabilid,isvalid:null,rgrid:[this.Grid1Container],fld:"vLANCAMENTOCONTABILID",gxz:"ZV11LancamentoContabilId",gxold:"OV11LancamentoContabilId",gxvar:"AV11LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILID",gx.O.AV11LancamentoContabilId,0)},c2v:function(){gx.O.AV11LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Itenslancamentocontabilsequencia,isvalid:null,rgrid:[this.Grid1Container],fld:"vITENSLANCAMENTOCONTABILSEQUENCIA",gxz:"ZV13ItensLancamentoContabilSequencia",gxold:"OV13ItensLancamentoContabilSequencia",gxvar:"AV13ItensLancamentoContabilSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ItensLancamentoContabilSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ItensLancamentoContabilSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vITENSLANCAMENTOCONTABILSEQUENCIA",gx.O.AV13ItensLancamentoContabilSequencia,0)},c2v:function(){gx.O.AV13ItensLancamentoContabilSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITENSLANCAMENTOCONTABILSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILDATA",gxz:"ZV15LancamentoContabilData",gxold:"OV15LancamentoContabilData",gxvar:"AV15LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILDATA",gx.O.AV15LancamentoContabilData,0)},c2v:function(){gx.O.AV15LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCONTABILDATA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITENSLANCAMENTOCONTABILVALOR",gxz:"ZV14ItensLancamentoContabilValor",gxold:"OV14ItensLancamentoContabilValor",gxvar:"AV14ItensLancamentoContabilValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vITENSLANCAMENTOCONTABILVALOR",gx.O.AV14ItensLancamentoContabilValor,2,',')},c2v:function(){gx.O.AV14ItensLancamentoContabilValor=this.val()},val:function(){return gx.fn.getDecimalValue("vITENSLANCAMENTOCONTABILVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBCRETELA",gxz:"ZV16DebCreTela",gxold:"OV16DebCreTela",gxvar:"AV16DebCreTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DebCreTela=Value},v2z:function(Value){gx.O.ZV16DebCreTela=Value},v2c:function(){gx.fn.setControlValue("vDEBCRETELA",gx.O.AV16DebCreTela,0)},c2v:function(){gx.O.AV16DebCreTela=this.val()},val:function(){return gx.fn.getControlValue("vDEBCRETELA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV12ContaContabilId",gxold:"OV12ContaContabilId",gxvar:"AV12ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ContaContabilId=Value},v2z:function(Value){gx.O.ZV12ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV12ContaContabilId,0)},c2v:function(){gx.O.AV12ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[36]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(35),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMSEQUENCIA",gxz:"Z1803ContaLancamSequencia",gxold:"O1803ContaLancamSequencia",gxvar:"A1803ContaLancamSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1803ContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1803ContaLancamSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(35),gx.O.A1803ContaLancamSequencia,0)},c2v:function(){gx.O.A1803ContaLancamSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCONUMERO",gxz:"Z1929LancamentoCxaBcoNumero",gxold:"O1929LancamentoCxaBcoNumero",gxvar:"A1929LancamentoCxaBcoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(35),gx.O.A1929LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILFINANCS",gxz:"Z2744ItensLancamentoContabilFinancS",gxold:"O2744ItensLancamentoContabilFinancS",gxvar:"A2744ItensLancamentoContabilFinancS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2744ItensLancamentoContabilFinancS=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2744ItensLancamentoContabilFinancS=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ITENSLANCAMENTOCONTABILFINANCS",row || gx.fn.currentGridRowImpl(35),gx.O.A2744ItensLancamentoContabilFinancS,0)},c2v:function(){gx.O.A2744ItensLancamentoContabilFinancS=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ITENSLANCAMENTOCONTABILFINANCS",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"DIV2", format:2,grid:0};
   this.AV11LancamentoContabilId = 0 ;
   this.ZV11LancamentoContabilId = 0 ;
   this.OV11LancamentoContabilId = 0 ;
   this.AV13ItensLancamentoContabilSequencia = 0 ;
   this.ZV13ItensLancamentoContabilSequencia = 0 ;
   this.OV13ItensLancamentoContabilSequencia = 0 ;
   this.AV15LancamentoContabilData = gx.date.nullDate() ;
   this.ZV15LancamentoContabilData = gx.date.nullDate() ;
   this.OV15LancamentoContabilData = gx.date.nullDate() ;
   this.AV14ItensLancamentoContabilValor = 0 ;
   this.ZV14ItensLancamentoContabilValor = 0 ;
   this.OV14ItensLancamentoContabilValor = 0 ;
   this.AV16DebCreTela = "" ;
   this.ZV16DebCreTela = "" ;
   this.OV16DebCreTela = "" ;
   this.AV12ContaContabilId = "" ;
   this.ZV12ContaContabilId = "" ;
   this.OV12ContaContabilId = "" ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1803ContaLancamSequencia = 0 ;
   this.O1803ContaLancamSequencia = 0 ;
   this.Z1929LancamentoCxaBcoNumero = 0 ;
   this.O1929LancamentoCxaBcoNumero = 0 ;
   this.Z2744ItensLancamentoContabilFinancS = 0 ;
   this.O2744ItensLancamentoContabilFinancS = 0 ;
   this.AV11LancamentoContabilId = 0 ;
   this.AV13ItensLancamentoContabilSequencia = 0 ;
   this.AV15LancamentoContabilData = gx.date.nullDate() ;
   this.AV14ItensLancamentoContabilValor = 0 ;
   this.AV16DebCreTela = "" ;
   this.AV12ContaContabilId = "" ;
   this.AV17ItensLancamentoContabilDebCre = "" ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A61LancamentoContabilId = 0 ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A2744ItensLancamentoContabilFinancS = 0 ;
   this.AV18EmpresaPadrao = "" ;
   this.Events = {"e13j82_client": ["ENTER", true] ,"e11j82_client": ["'FECHAR'", true] ,"e15j82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11LancamentoContabilId',fld:'vLANCAMENTOCONTABILID',hsh:true},{av:'AV13ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11LancamentoContabilId',fld:'vLANCAMENTOCONTABILID',hsh:true},{av:'AV13ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11LancamentoContabilId',fld:'vLANCAMENTOCONTABILID',hsh:true},{av:'AV13ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11LancamentoContabilId',fld:'vLANCAMENTOCONTABILID',hsh:true},{av:'AV13ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11LancamentoContabilId',fld:'vLANCAMENTOCONTABILID',hsh:true},{av:'AV13ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA',hsh:true}],[]];
   this.setVCMap("AV18EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17ItensLancamentoContabilDebCre", "vITENSLANCAMENTOCONTABILDEBCRE", 0, "char");
   this.setVCMap("AV18EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV18EmpresaPadrao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[17]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarintegracaofinanceiro());
