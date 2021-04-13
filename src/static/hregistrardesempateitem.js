/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:6:44.23
*/
gx.evt.autoSkip = false;
gx.define('hregistrardesempateitem', false, function () {
   this.ServerClass =  "hregistrardesempateitem" ;
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
      this.AV22Preco=gx.fn.getControlValue("vPRECO") ;
      this.AV23Mod=gx.fn.getControlValue("vMOD") ;
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
   this.Validv_Item=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Snganhador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSNGANHADOR");
         this.AnyError  = 0;
         if ( ! ( this.AV11SnGanhador == "N" || this.AV11SnGanhador == "S" || (""==this.AV11SnGanhador) ) )
         {
            try {
               gxballoon.setError("Campo SnGanhador fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(29));
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
   this.s132_client=function()
   {
      /* Start For Each Line in Grid */
      var rowIdx29 = 1 ;
      var currentRowIdx29 = gx.fn.currentGridRowImpl(29) ;
      var rowIdxS29 ;
      var gridObj29 = gx.O.getGridById(29,0) ;
      while ( rowIdx29 <= gridObj29.grid.rows.length )
      {
         rowIdxS29 =  gx.text.padl( gx.text.tostring( rowIdx29), 4, "0")  ;
         gridObj29.instanciateRow(gridObj29.grid.getRowById(rowIdx29 - 1));
         if ( this.AV11SnGanhador == "S" )
         {
            this.AV17i = gx.num.trunc( this.AV17i + 1 ,0) ;
         }
         rowIdx29 = gx.num.trunc( rowIdx29 + 1 ,0) ;
      }
      if ( currentRowIdx29 )
      {
         gridObj29.instanciateRow(currentRowIdx29);
      }
   };
   this.e11pz2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e12pz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15pz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16pz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,28,30,31,32,33,34,35,36,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrardesempateitem",[],false,1,false,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Snganhador",30,"vSNGANHADOR","Ganhador","","SnGanhador","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit(69,31,"PESSOAID","Fornecedor","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(70,32,"PESSOARAZAOSOCIAL","Razão","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],70,"PessoaRazaoSocial",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3392,33,"SOLICITACAOITEMSEQ","Sequência","","SolicitacaoItemSeq","int",0,"px",6,6,"right",null,[],3392,"SolicitacaoItemSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3397,34,"COTACAOSNGANHADOR","Fornecedor Ganhador","","CotacaoSnGanhador","char",0,"px",1,1,"left",null,[],3397,"CotacaoSnGanhador",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3395,35,"COTACAOVALORAVISTA","Valor à Vista","","CotacaoValorAvista","decimal",0,"px",21,21,"right",null,[],3395,"CotacaoValorAvista",false,4,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAONUMERO",gxz:"ZV12SolicitacaoNumero",gxold:"OV12SolicitacaoNumero",gxvar:"AV12SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV12SolicitacaoNumero,0)},c2v:function(){gx.O.AV12SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE5",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Item,isvalid:null,rgrid:[this.GridContainer],fld:"vITEM",gxz:"ZV15Item",gxold:"OV15Item",gxvar:"AV15Item",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Item=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Item=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vITEM",gx.O.AV15Item,0)},c2v:function(){gx.O.AV15Item=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITEM",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITEMDESCRICAO",gxz:"ZV16ItemDescricao",gxold:"OV16ItemDescricao",gxvar:"AV16ItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ItemDescricao=Value},v2z:function(Value){gx.O.ZV16ItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vITEMDESCRICAO",gx.O.AV16ItemDescricao,0)},c2v:function(){gx.O.AV16ItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[30]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Validv_Snganhador,isvalid:null,rgrid:[],fld:"vSNGANHADOR",gxz:"ZV11SnGanhador",gxold:"OV11SnGanhador",gxvar:"AV11SnGanhador",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV11SnGanhador=Value},v2z:function(Value){gx.O.ZV11SnGanhador=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vSNGANHADOR",row || gx.fn.currentGridRowImpl(29),gx.O.AV11SnGanhador,"S")},c2v:function(){gx.O.AV11SnGanhador=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNGANHADOR",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[32],ip:[32,31],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(29),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(29),gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOITEMSEQ",gxz:"Z3392SolicitacaoItemSeq",gxold:"O3392SolicitacaoItemSeq",gxvar:"A3392SolicitacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3392SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(29),gx.O.A3392SolicitacaoItemSeq,0)},c2v:function(){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COTACAOSNGANHADOR",gxz:"Z3397CotacaoSnGanhador",gxold:"O3397CotacaoSnGanhador",gxvar:"A3397CotacaoSnGanhador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3397CotacaoSnGanhador=Value},v2z:function(Value){gx.O.Z3397CotacaoSnGanhador=Value},v2c:function(row){gx.fn.setGridControlValue("COTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(29),gx.O.A3397CotacaoSnGanhador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3397CotacaoSnGanhador=this.val()},val:function(row){return gx.fn.getGridControlValue("COTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COTACAOVALORAVISTA",gxz:"Z3395CotacaoValorAvista",gxold:"O3395CotacaoValorAvista",gxvar:"A3395CotacaoValorAvista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3395CotacaoValorAvista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3395CotacaoValorAvista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COTACAOVALORAVISTA",row || gx.fn.currentGridRowImpl(29),gx.O.A3395CotacaoValorAvista,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3395CotacaoValorAvista=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COTACAOVALORAVISTA",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaoempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAOEMPRESAID",gxz:"ZV13SolicitacaoEmpresaId",gxold:"OV13SolicitacaoEmpresaId",gxvar:"AV13SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV13SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOEMPRESAID",gx.O.AV13SolicitacaoEmpresaId,0)},c2v:function(){gx.O.AV13SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vITEMVALOR",gxz:"ZV14ItemValor",gxold:"OV14ItemValor",gxvar:"AV14ItemValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ItemValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14ItemValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vITEMVALOR",gx.O.AV14ItemValor,4,',')},c2v:function(){gx.O.AV14ItemValor=this.val()},val:function(){return gx.fn.getDecimalValue("vITEMVALOR",'.',',')},nac:gx.falseFn};
   this.AV12SolicitacaoNumero = 0 ;
   this.ZV12SolicitacaoNumero = 0 ;
   this.OV12SolicitacaoNumero = 0 ;
   this.AV15Item = 0 ;
   this.ZV15Item = 0 ;
   this.OV15Item = 0 ;
   this.AV16ItemDescricao = "" ;
   this.ZV16ItemDescricao = "" ;
   this.OV16ItemDescricao = "" ;
   this.ZV11SnGanhador = "" ;
   this.OV11SnGanhador = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.Z3392SolicitacaoItemSeq = 0 ;
   this.O3392SolicitacaoItemSeq = 0 ;
   this.Z3397CotacaoSnGanhador = "" ;
   this.O3397CotacaoSnGanhador = "" ;
   this.Z3395CotacaoValorAvista = 0 ;
   this.O3395CotacaoValorAvista = 0 ;
   this.AV13SolicitacaoEmpresaId = "" ;
   this.ZV13SolicitacaoEmpresaId = "" ;
   this.OV13SolicitacaoEmpresaId = "" ;
   this.AV14ItemValor = 0 ;
   this.ZV14ItemValor = 0 ;
   this.OV14ItemValor = 0 ;
   this.AV12SolicitacaoNumero = 0 ;
   this.AV15Item = 0 ;
   this.AV16ItemDescricao = "" ;
   this.AV13SolicitacaoEmpresaId = "" ;
   this.AV14ItemValor = 0 ;
   this.AV23Mod = "" ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV11SnGanhador = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A3395CotacaoValorAvista = 0 ;
   this.AV22Preco = "" ;
   this.AV17i = 0 ;
   this.Events = {"e11pz2_client": ["'CONFIRMAR'", true] ,"e12pz2_client": ["'FECHAR'", true] ,"e15pz2_client": ["ENTER", true] ,"e16pz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV22Preco',fld:'vPRECO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV15Item',fld:'vITEM',hsh:true},{av:'AV14ItemValor',fld:'vITEMVALOR',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[{av:'AV11SnGanhador',fld:'vSNGANHADOR'}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ',grid:29},{av:'A69PessoaId',fld:'PESSOAID',grid:29},{av:'AV13SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV11SnGanhador',fld:'vSNGANHADOR',grid:29},{av:'AV17i',fld:'vI'}],[{av:'AV17i',fld:'vI'},{av:'AV18SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV22Preco',fld:'vPRECO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV15Item',fld:'vITEM',hsh:true},{av:'AV14ItemValor',fld:'vITEMVALOR',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV22Preco',fld:'vPRECO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV15Item',fld:'vITEM',hsh:true},{av:'AV14ItemValor',fld:'vITEMVALOR',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV22Preco',fld:'vPRECO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV15Item',fld:'vITEM',hsh:true},{av:'AV14ItemValor',fld:'vITEMVALOR',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV22Preco',fld:'vPRECO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV15Item',fld:'vITEM',hsh:true},{av:'AV14ItemValor',fld:'vITEMVALOR',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.setVCMap("AV22Preco", "vPRECO", 0, "char");
   this.setVCMap("AV23Mod", "vMOD", 0, "char");
   this.setVCMap("AV22Preco", "vPRECO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar({rfrVar:"AV22Preco"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV11SnGanhador", rfrProp:"Enabled", gxAttId:"Snganhador"});
   GridContainer.addRefreshingVar({rfrVar:"A3397CotacaoSnGanhador", rfrProp:"Value", gxAttId:"3397"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrardesempateitem());
