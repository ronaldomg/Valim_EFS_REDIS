/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:39:46.80
*/
gx.evt.autoSkip = false;
gx.define('hconvidadosconvite', false, function () {
   this.ServerClass =  "hconvidadosconvite" ;
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
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
   };
   this.Validv_Convitenumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVITENUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convidadoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(37) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVIDADOID", gx.fn.currentGridRowImpl(37));
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
   this.e11hl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13hl2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e15hl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16hl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,30,32,38,39,40,41,42,43,47];
   this.GXLastCtrlId =47;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",37,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconvidadosconvite",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(2632,38,"CONVIDADOID","Código","","ConvidadoId","int",0,"px",6,6,"right",null,[],2632,"ConvidadoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2625,39,"CONVIDADONOME","Nome do Convidado","","ConvidadoNome","svchar",0,"px",50,50,"left",null,[],2625,"ConvidadoNome",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(2626,40,"CONVIDADOCPF","CPF do Convidado","","ConvidadoCPF","char",0,"px",14,14,"left",null,[],2626,"ConvidadoCPF",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(2627,41,"CONVIDADORG","RG do Convidado","","ConvidadoRG","svchar",0,"px",20,20,"left",null,[],2627,"ConvidadoRG",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(2628,42,"CONVIDADODATANASCIMENTO","Nascimento","","ConvidadoDataNascimento","date",0,"px",10,10,"right",null,[],2628,"ConvidadoDataNascimento",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",43,0,"px",17,"px","e13hl2_client","","Excluir","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV14TitularPessoaId",gxold:"OV14TitularPessoaId",gxvar:"AV14TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV14TitularPessoaId,0)},c2v:function(){gx.O.AV14TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV15TitularPessoaNome",gxold:"OV15TitularPessoaNome",gxvar:"AV15TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV15TitularPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARPESSOANOME",gx.O.AV15TitularPessoaNome,0)},c2v:function(){gx.O.AV15TitularPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convitenumero,isvalid:null,rgrid:[this.Grid1Container],fld:"vCONVITENUMERO",gxz:"ZV11ConviteNumero",gxold:"OV11ConviteNumero",gxvar:"AV11ConviteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ConviteNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ConviteNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVITENUMERO",gx.O.AV11ConviteNumero,0)},c2v:function(){gx.O.AV11ConviteNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVITENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITEDATAINICIAL",gxz:"ZV12ConviteDataInicial",gxold:"OV12ConviteDataInicial",gxvar:"AV12ConviteDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ConviteDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12ConviteDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVITEDATAINICIAL",gx.O.AV12ConviteDataInicial,0)},c2v:function(){gx.O.AV12ConviteDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVITEDATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITEDATAFINAL",gxz:"ZV13ConviteDataFinal",gxold:"OV13ConviteDataFinal",gxvar:"AV13ConviteDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ConviteDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13ConviteDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVITEDATAFINAL",gx.O.AV13ConviteDataFinal,0)},c2v:function(){gx.O.AV13ConviteDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVITEDATAFINAL")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.Grid1Container,fnc:this.Valid_Convidadoid,isvalid:null,rgrid:[],fld:"CONVIDADOID",gxz:"Z2632ConvidadoId",gxold:"O2632ConvidadoId",gxvar:"A2632ConvidadoId",ucs:[],op:[39,40,41,42],ip:[39,40,41,42,38],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2632ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2632ConvidadoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(37),gx.O.A2632ConvidadoId,0)},c2v:function(){gx.O.A2632ConvidadoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADONOME",gxz:"Z2625ConvidadoNome",gxold:"O2625ConvidadoNome",gxvar:"A2625ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2625ConvidadoNome=Value},v2z:function(Value){gx.O.Z2625ConvidadoNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(37),gx.O.A2625ConvidadoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2625ConvidadoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADOCPF",gxz:"Z2626ConvidadoCPF",gxold:"O2626ConvidadoCPF",gxvar:"A2626ConvidadoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2626ConvidadoCPF=Value},v2z:function(Value){gx.O.Z2626ConvidadoCPF=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(37),gx.O.A2626ConvidadoCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2626ConvidadoCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADORG",gxz:"Z2627ConvidadoRG",gxold:"O2627ConvidadoRG",gxvar:"A2627ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2627ConvidadoRG=Value},v2z:function(Value){gx.O.Z2627ConvidadoRG=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(37),gx.O.A2627ConvidadoRG,0)},c2v:function(){gx.O.A2627ConvidadoRG=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADODATANASCIMENTO",gxz:"Z2628ConvidadoDataNascimento",gxold:"O2628ConvidadoDataNascimento",gxvar:"A2628ConvidadoDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(37),gx.O.A2628ConvidadoDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV17bmpExc",gxold:"OV17bmpExc",gxvar:"AV17bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpExc=Value},v2z:function(Value){gx.O.ZV17bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(37),gx.O.AV17bmpExc,gx.O.AV27Bmpexc_GXI)},c2v:function(){gx.O.AV27Bmpexc_GXI=this.val_GXI();gx.O.AV17bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV27Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCLUSAO",gxz:"ZV21SnExclusao",gxold:"OV21SnExclusao",gxvar:"AV21SnExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SnExclusao=Value},v2z:function(Value){gx.O.ZV21SnExclusao=Value},v2c:function(){gx.fn.setControlValue("vSNEXCLUSAO",gx.O.AV21SnExclusao,0)},c2v:function(){gx.O.AV21SnExclusao=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCLUSAO")},nac:gx.falseFn};
   this.AV14TitularPessoaId = 0 ;
   this.ZV14TitularPessoaId = 0 ;
   this.OV14TitularPessoaId = 0 ;
   this.AV15TitularPessoaNome = "" ;
   this.ZV15TitularPessoaNome = "" ;
   this.OV15TitularPessoaNome = "" ;
   this.AV11ConviteNumero = 0 ;
   this.ZV11ConviteNumero = 0 ;
   this.OV11ConviteNumero = 0 ;
   this.AV12ConviteDataInicial = gx.date.nullDate() ;
   this.ZV12ConviteDataInicial = gx.date.nullDate() ;
   this.OV12ConviteDataInicial = gx.date.nullDate() ;
   this.AV13ConviteDataFinal = gx.date.nullDate() ;
   this.ZV13ConviteDataFinal = gx.date.nullDate() ;
   this.OV13ConviteDataFinal = gx.date.nullDate() ;
   this.Z2632ConvidadoId = 0 ;
   this.O2632ConvidadoId = 0 ;
   this.Z2625ConvidadoNome = "" ;
   this.O2625ConvidadoNome = "" ;
   this.Z2626ConvidadoCPF = "" ;
   this.O2626ConvidadoCPF = "" ;
   this.Z2627ConvidadoRG = "" ;
   this.O2627ConvidadoRG = "" ;
   this.Z2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.O2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.ZV17bmpExc = "" ;
   this.OV17bmpExc = "" ;
   this.AV21SnExclusao = "" ;
   this.ZV21SnExclusao = "" ;
   this.OV21SnExclusao = "" ;
   this.AV14TitularPessoaId = 0 ;
   this.AV15TitularPessoaNome = "" ;
   this.AV11ConviteNumero = 0 ;
   this.AV12ConviteDataInicial = gx.date.nullDate() ;
   this.AV13ConviteDataFinal = gx.date.nullDate() ;
   this.AV21SnExclusao = "" ;
   this.A2586ConviteNumero = 0 ;
   this.A2585ConviteEmpresaid = "" ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A2632ConvidadoId = 0 ;
   this.A2625ConvidadoNome = "" ;
   this.A2626ConvidadoCPF = "" ;
   this.A2627ConvidadoRG = "" ;
   this.A2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.AV17bmpExc = "" ;
   this.A2633ConviteDataInicial = gx.date.nullDate() ;
   this.A2634ConviteDataFinal = gx.date.nullDate() ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV16EmpresaPadrao = "" ;
   this.Events = {"e11hl2_client": ["'FECHAR'", true] ,"e13hl2_client": ["'EXCLUIR'", true] ,"e15hl2_client": ["ENTER", true] ,"e16hl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11ConviteNumero',fld:'vCONVITENUMERO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV17bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11ConviteNumero',fld:'vCONVITENUMERO'}],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV21SnExclusao',fld:'vSNEXCLUSAO'},{av:'AV11ConviteNumero',fld:'vCONVITENUMERO'},{av:'A2632ConvidadoId',fld:'CONVIDADOID'}],[{av:'AV19MsgErroExc',fld:'vMSGERROEXC'}]];
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV16EmpresaPadrao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[22]);
   Grid1Container.addRefreshingVar({rfrVar:"AV17bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconvidadosconvite());
