/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:6:47.36
*/
gx.evt.autoSkip = false;
gx.define('hregistrarganhadoritem', false, function () {
   this.ServerClass =  "hregistrarganhadoritem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV26Mod=gx.fn.getControlValue("vMOD") ;
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
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(29));
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
            this.AV18i = gx.num.trunc( this.AV18i + 1 ,0) ;
         }
         rowIdx29 = gx.num.trunc( rowIdx29 + 1 ,0) ;
      }
      if ( currentRowIdx29 )
      {
         gridObj29.instanciateRow(currentRowIdx29);
      }
   };
   this.e11q12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12q12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15q12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,19,21,23,28,30,31,32,33,34,35,38,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarganhadoritem",[],false,1,false,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Snganhador",30,"vSNGANHADOR","Ganhador","","SnGanhador","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit(69,31,"PESSOAID","Fornecedor","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(70,32,"PESSOARAZAOSOCIAL","Razão","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],70,"PessoaRazaoSocial",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3392,33,"SOLICITACAOITEMSEQ","Sequência","","SolicitacaoItemSeq","int",0,"px",6,6,"right",null,[],3392,"SolicitacaoItemSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3397,34,"COTACAOSNGANHADOR","","","CotacaoSnGanhador","char",0,"px",1,1,"left",null,[],3397,"CotacaoSnGanhador",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV25PessoaId",gxold:"OV25PessoaId",gxvar:"AV25PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV25PessoaId,0)},c2v:function(){gx.O.AV25PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAONUMERO",gxz:"ZV12SolicitacaoNumero",gxold:"OV12SolicitacaoNumero",gxvar:"AV12SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV12SolicitacaoNumero,0)},c2v:function(){gx.O.AV12SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE5",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Item,isvalid:null,rgrid:[this.GridContainer],fld:"vITEM",gxz:"ZV13Item",gxold:"OV13Item",gxvar:"AV13Item",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Item=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Item=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vITEM",gx.O.AV13Item,0)},c2v:function(){gx.O.AV13Item=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITEM",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITEMDESCRICAO",gxz:"ZV14ItemDescricao",gxold:"OV14ItemDescricao",gxvar:"AV14ItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ItemDescricao=Value},v2z:function(Value){gx.O.ZV14ItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vITEMDESCRICAO",gx.O.AV14ItemDescricao,0)},c2v:function(){gx.O.AV14ItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[30]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Validv_Snganhador,isvalid:null,rgrid:[],fld:"vSNGANHADOR",gxz:"ZV11SnGanhador",gxold:"OV11SnGanhador",gxvar:"AV11SnGanhador",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV11SnGanhador=Value},v2z:function(Value){gx.O.ZV11SnGanhador=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vSNGANHADOR",row || gx.fn.currentGridRowImpl(29),gx.O.AV11SnGanhador,"S")},c2v:function(){gx.O.AV11SnGanhador=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNGANHADOR",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[32],ip:[32,31],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(29),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(29),gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOITEMSEQ",gxz:"Z3392SolicitacaoItemSeq",gxold:"O3392SolicitacaoItemSeq",gxvar:"A3392SolicitacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3392SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(29),gx.O.A3392SolicitacaoItemSeq,0)},c2v:function(){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COTACAOSNGANHADOR",gxz:"Z3397CotacaoSnGanhador",gxold:"O3397CotacaoSnGanhador",gxvar:"A3397CotacaoSnGanhador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3397CotacaoSnGanhador=Value},v2z:function(Value){gx.O.Z3397CotacaoSnGanhador=Value},v2c:function(row){gx.fn.setGridControlValue("COTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(29),gx.O.A3397CotacaoSnGanhador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3397CotacaoSnGanhador=this.val()},val:function(row){return gx.fn.getGridControlValue("COTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABELA4",grid:0};
   GXValidFnc[38]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaoempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAOEMPRESAID",gxz:"ZV15SolicitacaoEmpresaId",gxold:"OV15SolicitacaoEmpresaId",gxvar:"AV15SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV15SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOEMPRESAID",gx.O.AV15SolicitacaoEmpresaId,0)},c2v:function(){gx.O.AV15SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOEMPRESAID")},nac:gx.falseFn};
   this.AV25PessoaId = 0 ;
   this.ZV25PessoaId = 0 ;
   this.OV25PessoaId = 0 ;
   this.AV12SolicitacaoNumero = 0 ;
   this.ZV12SolicitacaoNumero = 0 ;
   this.OV12SolicitacaoNumero = 0 ;
   this.AV13Item = 0 ;
   this.ZV13Item = 0 ;
   this.OV13Item = 0 ;
   this.AV14ItemDescricao = "" ;
   this.ZV14ItemDescricao = "" ;
   this.OV14ItemDescricao = "" ;
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
   this.AV15SolicitacaoEmpresaId = "" ;
   this.ZV15SolicitacaoEmpresaId = "" ;
   this.OV15SolicitacaoEmpresaId = "" ;
   this.AV25PessoaId = 0 ;
   this.AV12SolicitacaoNumero = 0 ;
   this.AV13Item = 0 ;
   this.AV14ItemDescricao = "" ;
   this.AV15SolicitacaoEmpresaId = "" ;
   this.AV26Mod = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV11SnGanhador = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A3452CotacaoObservacao = "" ;
   this.AV18i = 0 ;
   this.Events = {"e11q12_client": ["ENTER", true] ,"e12q12_client": ["'FECHAR'", true] ,"e15q12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV13Item',fld:'vITEM',hsh:true},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV13Item',fld:'vITEM',hsh:true},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR',grid:29},{av:'AV11SnGanhador',fld:'vSNGANHADOR',grid:29},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ',grid:29},{av:'A69PessoaId',fld:'PESSOAID',grid:29},{av:'AV24flag',fld:'vFLAG'},{av:'AV18i',fld:'vI'}],[{av:'AV18i',fld:'vI'},{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV24flag',fld:'vFLAG'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[{av:'AV11SnGanhador',fld:'vSNGANHADOR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25PessoaId',fld:'vPESSOAID'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ',grid:29},{av:'A69PessoaId',fld:'PESSOAID',grid:29},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV27CotacaoObs',fld:'vCOTACAOOBS'}],[{av:'AV11SnGanhador',fld:'vSNGANHADOR'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV13Item',fld:'vITEM',hsh:true},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV13Item',fld:'vITEM',hsh:true},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV13Item',fld:'vITEM',hsh:true},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV13Item',fld:'vITEM',hsh:true},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'gx.fn.getCtrlProperty("vSNGANHADOR","Enabled")',ctrl:'vSNGANHADOR',prop:'Enabled'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26Mod", "vMOD", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridContainer.addRefreshingVar({rfrVar:"AV11SnGanhador", rfrProp:"Enabled", gxAttId:"Snganhador"});
   GridContainer.addRefreshingVar({rfrVar:"A3397CotacaoSnGanhador", rfrProp:"Value", gxAttId:"3397"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarganhadoritem());
