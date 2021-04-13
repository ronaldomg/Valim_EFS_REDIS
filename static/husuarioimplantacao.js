/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:27.20
*/
gx.evt.autoSkip = false;
gx.define('husuarioimplantacao', false, function () {
   this.ServerClass =  "husuarioimplantacao" ;
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
      this.AV7pUsuarioId=gx.fn.getControlValue("vPUSUARIOID") ;
      this.AV8pUsuarioNome=gx.fn.getControlValue("vPUSUARIONOME") ;
   };
   this.s122_client=function()
   {
      this.AV11SnErro =  "N"  ;
      if ( (""==this.AV5UsuarioId) )
      {
         this.addMessage("Informe o Usuário");
         gx.fn.usrSetFocus("vUSUARIOID") ;
         this.AV11SnErro =  "S"  ;
      }
      else
      {
         if ( this.AV5UsuarioId == "ADMIN" )
         {
            this.addMessage("Usuário \"ADMIN\" não pode ser cadastrado");
            gx.fn.usrSetFocus("vUSUARIOID") ;
            this.AV11SnErro =  "S"  ;
         }
         else
         {
            this.AV13I =  1  ;
            while ( this.AV13I <= gx.text.length( this.AV5UsuarioId) )
            {
               this.AV12NmAux =  gx.text.upper( gx.text.substring( this.AV5UsuarioId, this.AV13I, 1))  ;
               if ( gx.text.indexOf( this.AV12NmAux, "A", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "B", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "C", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "D", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "E", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "F", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "G", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "H", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "I", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "J", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "L", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "M", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "N", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "O", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "P", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "Q", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "R", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "S", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "T", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "U", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "V", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "X", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "Z", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "K", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "W", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "Y", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "1", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "2", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "3", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "4", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "5", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "6", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "7", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "8", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "9", 1) == 0 && gx.text.indexOf( this.AV12NmAux, "0", 1) == 0 )
               {
                  this.addMessage("Usuário não pode conter caracteres especiais");
                  gx.fn.usrSetFocus("vUSUARIOID") ;
                  this.AV11SnErro =  "S"  ;
               }
               this.AV13I =  this.AV13I + 1  ;
            }
         }
      }
      if ( this.AV11SnErro == "N" )
      {
         if ( (""==this.AV6UsuarioNome) )
         {
            this.addMessage("Informe o Nome do Usuário");
            gx.fn.usrSetFocus("vUSUARIONOME") ;
            this.AV11SnErro =  "S"  ;
         }
      }
   };
   this.e12tc2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e13tc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15tc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV5UsuarioId",gxold:"OV5UsuarioId",gxvar:"AV5UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5UsuarioId=Value},v2z:function(Value){gx.O.ZV5UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV5UsuarioId,0)},c2v:function(){gx.O.AV5UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV6UsuarioNome",gxold:"OV6UsuarioNome",gxvar:"AV6UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6UsuarioNome=Value},v2z:function(Value){gx.O.ZV6UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV6UsuarioNome,0)},c2v:function(){gx.O.AV6UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   this.AV5UsuarioId = "" ;
   this.ZV5UsuarioId = "" ;
   this.OV5UsuarioId = "" ;
   this.AV6UsuarioNome = "" ;
   this.ZV6UsuarioNome = "" ;
   this.OV6UsuarioNome = "" ;
   this.AV5UsuarioId = "" ;
   this.AV6UsuarioNome = "" ;
   this.AV7pUsuarioId = "" ;
   this.AV8pUsuarioNome = "" ;
   this.AV12NmAux = "" ;
   this.AV13I = 0 ;
   this.AV11SnErro = "" ;
   this.Events = {"e12tc2_client": ["'CANCELAR'", true] ,"e13tc2_client": ["ENTER", true] ,"e15tc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV10SnOk',fld:'vSNOK'},{av:'AV5UsuarioId',fld:'vUSUARIOID'},{av:'AV6UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV10SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11SnErro',fld:'vSNERRO'},{av:'AV5UsuarioId',fld:'vUSUARIOID'},{av:'AV6UsuarioNome',fld:'vUSUARIONOME'},{av:'AV10SnOk',fld:'vSNOK'}],[{av:'AV10SnOk',fld:'vSNOK'},{av:'AV11SnErro',fld:'vSNERRO'},{av:'AV13I',fld:'vI'},{av:'AV12NmAux',fld:'vNMAUX'}]];
   this.EnterCtrl = ["BTNCONFIRMAR1"];
   this.setVCMap("AV7pUsuarioId", "vPUSUARIOID", 0, "char");
   this.setVCMap("AV8pUsuarioNome", "vPUSUARIONOME", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new husuarioimplantacao());
